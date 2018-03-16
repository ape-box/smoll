#!/usr/bin/env bash

set -env

dotnet restore

dotnet test .\Smoll.Api.Back.Tests\Smoll.Api.Back.Tests.csproj
dotnet test .\Smoll.Api.Back.Tests\Smoll.Api.Common.Tests.csproj
dotnet test .\Smoll.Api.Back.Tests\Smoll.Api.Front.Tests.csproj

dotnet build