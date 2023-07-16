#! /bin/bash

ssh chris@crowdsolve.ai "bash -c 'cd /apps/crowdsolve.ai && docker-compose logs -f service'"