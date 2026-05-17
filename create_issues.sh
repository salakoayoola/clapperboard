#!/bin/bash

# Issue 1
ISSUE1=$(gh issue create --title "Scaffolding & Core Slate UI" --body "## Parent PRD
#1

## What to build
Initialize React Native app, set up Zustand state, and build the static visual layout of the Simple Mode slate to look exactly like the mockup.

## Acceptance criteria
- [ ] React Native project initialized
- [ ] High-contrast dark theme configured
- [ ] Static UI layout matches PRD specs (Production, Director, DOP, Scene, Take)

## Blocked by
None - can start immediately

## User stories addressed
- High-contrast dark theme
- Director & DOP Fields
- Production Name" | awk -F/ '{print $NF}')
echo "Created #$ISSUE1"

# Issue 2
ISSUE2=$(gh issue create --title "Gesture Clap & State Persistence" --body "## Parent PRD
#1

## What to build
Implement the swipe gesture. Make the sticks animate, auto-increment the take counter on completion, and persist all slate text fields to local storage (MMKV) so they survive app restarts.

## Acceptance criteria
- [ ] Swipe down gesture triggers clap animation
- [ ] Take counter auto-increments after clap
- [ ] Slate fields persist across app restarts using MMKV

## Blocked by
- Blocked by #$ISSUE1

## User stories addressed
- Gesture Clap
- Scene / Take Counters
- Quick Reset" | awk -F/ '{print $NF}')
echo "Created #$ISSUE2"

# Issue 3
ISSUE3=$(gh issue create --title "Native Feedback (Audio & Haptics)" --body "## Parent PRD
#1

## What to build
Implement the 50ms screen flash, UIImpactFeedbackStyleHeavy haptics, and 1kHz audio beep precisely synchronized to the end of the clap gesture. Wire up the mute toggle.

## Acceptance criteria
- [ ] Screen flash and haptics trigger on clap
- [ ] 1kHz audio beep plays on clap
- [ ] Sound toggle correctly mutes audio

## Blocked by
- Blocked by #$ISSUE2

## User stories addressed
- Gesture Clap (Audio/Haptics)
- Sound Toggle" | awk -F/ '{print $NF}')
echo "Created #$ISSUE3"

# Issue 4
ISSUE4=$(gh issue create --title "Timecode Engine Integration" --body "## Parent PRD
#1

## What to build
Build the timecode generator (using JSI or native bridges) to run frame-accurate timecode off the device clock and display it continuously on the slate UI.

## Acceptance criteria
- [ ] Timecode increments accurately based on device clock
- [ ] Supports 24, 25, 30fps
- [ ] UI displays running timecode

## Blocked by
- Blocked by #$ISSUE1

## User stories addressed
- Multi-FPS Timecode" | awk -F/ '{print $NF}')
echo "Created #$ISSUE4"

# Issue 5
ISSUE5=$(gh issue create --title "Shot Logging Storage" --body "## Parent PRD
#1

## What to build
Hook into the clap event to grab the exact timecode and save the shot (with notes and current metadata) into a local SQLite database.

## Acceptance criteria
- [ ] Clap event saves shot record to SQLite
- [ ] Shot record includes timecode, scene, take, notes
- [ ] Notes field is available for the next take

## Blocked by
- Blocked by #$ISSUE2
- Blocked by #$ISSUE4

## User stories addressed
- Notes Field
- Shot Log (Local)
- Take Rating" | awk -F/ '{print $NF}')
echo "Created #$ISSUE5"

# Issue 6
ISSUE6=$(gh issue create --title "Shot History View & Export" --body "## Parent PRD
#1

## What to build
Build the 'Log' tab showing history of today's takes. Generate a CSV string of the database and pass it to the native iOS/Android Share Sheet.

## Acceptance criteria
- [ ] Log tab displays saved shots
- [ ] CSV string generation from SQLite data
- [ ] Share Sheet triggered with CSV export

## Blocked by
- Blocked by #$ISSUE5

## User stories addressed
- Shot Log (Local)
- Basic Export" | awk -F/ '{print $NF}')
echo "Created #$ISSUE6"
