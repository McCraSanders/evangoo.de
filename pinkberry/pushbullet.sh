#!/bin/bash

key="o.Q06F9uAxsfG4eGQ2QFO1Ke0u3O8ebtcN"
title="pinkberry"
message="$1"

curl -u $key: https://api.pushbullet.com/v2/pushes -d type=note -d title="$title" -d body="$message"
