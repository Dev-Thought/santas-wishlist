#!/bin/bash

if [ -z "$1" ]; then
  echo "You must provide a name for your project"
fi

NAME="$1"

cNone='\033[00m'
cRed='\033[01;31m'
cGreen='\033[01;32m'
cYellow='\033[01;33m'
cPurple='\033[01;35m'
cCyan='\033[01;36m'
cWhite='\033[01;37m'
cBold='\033[1m'
cUnderline='\033[4m'

echo -e "${cYellow}Setup: BACKEND${cNone}"
echo -e "${cGreen}Create resource group${cNone}"
az group create --location westeurope --name $NAME

echo -e "${cGreen}Create storage${cNone}"
az storage account create --name $NAME --resource-group $NAME --kind StorageV2

echo -e "${cGreen}Create azure function app${cNone}"
az functionapp create --resource-group $NAME --consumption-plan-location westeurope --name $NAME --storage-account $NAME

echo -e "${cGreen}Set connection string of db as environment to the azure function${cNone}"
CONNECTION_STRING="$(az storage account show-connection-string --name $NAME --resource-group $NAME --output tsv)"
az webapp config appsettings set -g $NAME -n $NAME --settings AZURE_STORAGE_CONNECTION_STRING="$CONNECTION_STRING"
echo "AZURE_STORAGE_CONNECTION_STRING=\"$CONNECTION_STRING\"" >backend/.env

echo -e "${cGreen}Set cors header to *${cNone}"
az functionapp cors remove -g $NAME -n $NAME --allowed-origins
az functionapp cors add -g $NAME -n $NAME --allowed-origins "*"

echo -e "${cYellow}Setup: FRONTEND${cNone}"
echo -e "${cGreen}Create webhost container${cNone}"
az storage blob service-properties update --account-name $NAME --static-website --404-document index.html --index-document index.html --query "{staticWebsite: staticWebsite}"
