# Clapperboard — Product Requirements Document

**Version:** 1.0.0  
**Last Updated:** 2026-05-17  
**Status:** Draft — Awaiting Review  
**Author:** AI Product Research  
**Target Platforms:** iOS 17+, Android 14+, watchOS 10+

---

## 1. Executive Summary

### 1.1 Product Vision
Clapperboard is a modern, professional-grade digital slate and production logging tool for filmmakers, camera assistants, sound recordists, and content creators. It replaces the physical clapperboard with a meticulously designed mobile experience that combines accurate timecode, intelligent shot logging, seamless team collaboration, and post-production integrations — all while remaining instantly readable in any on-set lighting condition.

### 1.2 Target Audience

| Segment | Mode | Description | Needs |
|---------|------|-------------|-------|
| **Primary: Solo Creators / YouTubers** | Simple | One-person crews shooting content with mirrorless/DSLR setups | Zero friction, clap in 3 seconds, basic notes export |
| **Primary: Students / Hobbyists** | Simple | Learning filmmaking; first time using a slate | Free, no learning curve, no missing essential features |
| **Secondary: Indie Filmmakers** | Simple → Advanced | Small crews (3–8 people) with occasional need for more | Start simple; graduate to advanced as production grows |
| **Secondary: 2nd ACs / Camera Assistants** | Advanced | Traditional slate operators on professional sets | Speed, accuracy, protocol compliance, full metadata |
| **Secondary: Sound Recordists** | Advanced | Need synchronized metadata and clean sync marks | Timecode jam sync, waveform-accurate clap, sound reports |
| **Tertiary: Production Coordinators / DITs** | Advanced | Manage data flow from set to post | Collaboration, exports, producer visibility |

### 1.3 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Day-7 Retention (Simple users) | >40% | In-app analytics |
| Day-7 Retention (Advanced users) | >55% | In-app analytics |
| Simple → Advanced Mode Switch Rate | >8% | In-app analytics |
| Average Shots Logged/Session (Simple) | >8 | In-app analytics |
| Average Shots Logged/Session (Advanced) | >20 | In-app analytics |
| App Store Rating | >4.6★ | iOS App Store, Google Play |
| Sync Accuracy | ±1 frame @ 24fps | Technical benchmarking |
| Time-to-Slate (Simple mode, open app → clap) | <3 seconds | UX benchmarking |

---

## 2. Problem Statement

### 2.1 Current Pain Points

1. **Physical slates are expensive and fragile.** A professional acrylic slate costs $80–$150, gets scuffed, requires markers, and is one more item to carry.
2. **Existing apps are outdated or iOS-only.** MovieSlate (iOS only, $29.99 + subscriptions) dominates but has a dated UI and locks core features behind paywalls. DigiSlate hasn't been updated in years. Android options are fragmented and unreliable.
3. **No modern collaboration.** Most apps store data locally. If a 2nd AC's phone dies, shot history is gone. There's no real-time producer visibility.
4. **Poor visibility on set.** Many apps use light themes or small fonts that are unreadable in bright daylight or dark stages.
5. **Clumsy clap mechanics.** Apps that require tapping small buttons or using volume keys miss the tactile satisfaction and precision of a physical slate clap.
6. **Data gets lost before post.** Shot logs remain trapped on a phone. Exporting requires emailing CSVs or manually transcribing.

### 2.2 Competitive Landscape

| App | Platform | Price | Strengths | Weaknesses |
|-----|----------|-------|-----------|------------|
| **MovieSlate 8** | iOS only | $29.99 + $14.99/mo Pro | Feature-rich, timecode sync, Sound Devices integration | iOS only, dated UI, expensive subscriptions, steep learning curve |
| **DigiSlate** | iOS only | Free + IAP | Simple, free, music mode | Abandoned (no updates), no Android, no cloud |
| **CineSlate** | Android | Free | Decent Android option | Limited features, no timecode sync, ads |
| **Digital Clapperboard** | iPad only | Free | Timecode, beep sync | Poor reviews, broken clap mechanic, data loss on close |
| **DSLR Clapperboard** | iOS | Free + IAP | Simple, auto-take advance | Very basic, no logging, no collaboration |
| **Marker** | iOS | $0.99 | Lightweight timecode markers, customizable labels, PDF/CSV/text reports, iCloud sync, Apple Watch, macOS keyboard shortcuts | No actual slate/clapper display; tiny niche (<1k downloads); no clap gesture; no scene/take/roll management; no Android |

### 2.3 Our Differentiation
- **Cross-platform from day one** (iOS + Android + watchOS)
- **Truly free tier** that covers 90% of indie needs
- **Modern, high-contrast UI** designed for set visibility first
- **Gesture-based clap** (swipe, shake, or tap) with haptic/audio feedback
- **Real-time cloud collaboration** — producer sees shots as they happen
- **Native post-production exports** (Premiere, DaVinci Resolve, Final Cut Pro)
- **Voice control** for hands-free operation when the 2nd AC is holding a slate and lens case

---

## 3. Feature Specifications

### 3.1 Design Philosophy: Two Modes, One App

Clapperboard operates in two distinct modes that users can toggle between at any time. The goal is zero intimidation for newcomers and zero friction for professionals.

| Aspect | **Simple Mode** | **Advanced Mode** |
|--------|-----------------|-------------------|
| **Who it's for** | Solo creators, students, YouTubers, one-person crews | 2nd ACs, sound recordists, DITs, professional productions |
| **Mental model** | "I just need to clap and note a few things" | "I need every metadata field, sync, and report format known to the industry" |
| **Default view** | Clean slate with 5 fields | Full slate with all fields, toggles, and live data |
| **Settings complexity** | Minimal (FPS, sound on/off) | Extensive (custom fields, BLE devices, export presets, team roles) |
| **Onboarding** | 30 seconds, no tutorial needed | Contextual tooltips, optional deep-dive guide |
| **Switching** | One tap on the slate to toggle modes | Same toggle; Advanced remembers your last layout |

### 3.2 Simple Mode Features

Simple Mode is the default on first launch. It is intentionally minimal — every feature must justify its presence by being used on >80% of simple shoots.

| Feature | Description | Priority |
|---------|-------------|----------|
| **Digital Slate Display** | High-contrast slate showing: Production Title, Director, DOP, Timecode, Scene, Take | P0 |
| **Gesture Clap** | Swipe down on the sticks area to clap. Audio beep + haptic feedback synchronized to the visual clap | P0 |
| **Scene / Take Counters** | Auto-incrementing take number after each clap. Manual override via tap-to-edit | P0 |
| **Multi-FPS Timecode** | 24, 25, 30fps selection (covers 95% of simple use cases). Accurate to device clock | P0 |
| **Sound Toggle** | One-tap mute/unmute for the clap beep | P0 |
| **Director & DOP Fields** | Editable text fields for director and director of photography names | P0 |
| **Notes Field** | Free-text notes attached to each take (e.g., "Lens flare at end", "Dog barked") | P0 |
| **Shot Log (Local)** | Every clap saves: timecode, scene, take, notes. Stored locally on device | P0 |
| **Basic Export** | Share shot log as CSV or plain text via system share sheet | P0 |
| **High-Contrast Dark Theme** | OLED black background with amber/white text. Readable in any lighting | P0 |
| **Production Name** | Single text field naming the current production/shoot | P0 |
| **Quick Reset** | One-tap reset of scene/take counters for a new scene | P1 |
| **Take Rating** | Simple thumbs-up / thumbs-down on each shot in the log | P1 |

**Simple Mode explicitly excludes:** roll numbers, MOS/NDK/Pick-Up toggles, INT/EXT/DAY/NIGHT markers, custom fields, Bluetooth sync, cloud collaboration, music mode, GPS, Apple Watch, voice control, and advanced export formats. These live in Advanced Mode.

### 3.3 Advanced Mode Features

Advanced Mode unlocks the full professional toolkit. It is a superset of Simple Mode — every Simple feature works identically, with additional power-user features layered on top.

#### 3.3.1 Core Slate Enhancements

| Feature | Description | Priority |
|---------|-------------|----------|
| **Roll Management** | Roll prefix (A, B, CAM1) + auto-incrementing roll numbers (A001, A002) | P0 |
| **INT / EXT Toggle** | Interior / Exterior marker on slate | P0 |
| **DAY / NIGHT Toggle** | Day / Night marker on slate | P0 |
| **MOS Toggle** | One-tap "Mit Out Sound" badge | P0 |
| **NDK / NDF Toggle** | Non-Drop Frame marker | P0 |
| **Pick-Up Toggle** | Mark a shot as a pick-up (resumed from mid-scene) | P0 |
| **Second Sticks** | Mark a second clap for the same take | P0 |
| **Tail Slate** | Mode for slating at the *end* of a take instead of the beginning | P0 |
| **Filters / Lens Info** | Text field for ND filters, lens serial, etc. | P1 |
| **Custom Slate Fields** | User-defined fields (e.g., VFX ID, LUT name, color space) | P1 |
| **Production Presets** | Save and recall full production configurations (title, crew, defaults) | P0 |

#### 3.3.2 Timecode & Sync

| Feature | Description | Priority |
|---------|-------------|----------|
| **Full FPS Support** | 23.976, 24, 25, 29.97, 30, 50, 59.94, 60fps + drop-frame/non-drop-frame | P0 |
| **Bluetooth Timecode Jam** | Sync with Tentacle Sync E, Atomos AtomX SYNCS, UltraSync BLUE via BLE | P1 |
| **Custom Timecode Offset** | Manually offset internal timecode to match external source | P1 |
| **Timecode Out Logging** | Log timecode at end of take (if manually marked) | P1 |
| **Audio Sync Verification** | Visual waveform display to verify clap spike alignment | P2 |

#### 3.3.3 Logging & Metadata

| Feature | Description | Priority |
|---------|-------------|----------|
| **GPS Location** | Auto-tag each shot with coordinates | P1 |
| **Photo / Thumbnail Attach** | Attach a reference still to each shot log entry | P1 |
| **Circle / Print / Hold / Bad Ratings** | Industry-standard take ratings with editor notes | P1 |
| **Voice Notes** | Attach voice memo to shot instead of typing | P1 |
| **Tags & Keywords** | Keyword-based logging for search/filter in post | P2 |

#### 3.3.4 Collaboration & Cloud

| Feature | Description | Priority |
|---------|-------------|----------|
| **Real-Time Cloud Sync** | Shot log syncs across crew devices in real time | P1 |
| **Team Invites** | Share production via link or QR code | P1 |
| **Role-Based Permissions** | Viewer, Logger, Admin roles | P2 |
| **Offline Mode** | Full functionality without internet; queue sync for reconnection | P1 |
| **Web Dashboard** | Browser view for producers/DITs to monitor live slate data | P2 |

#### 3.3.5 Export & Post-Production

| Feature | Description | Priority |
|---------|-------------|----------|
| **Sound Report PDF** | Professional sound department report generation | P1 |
| **FCPXML Export** | Final Cut Pro X marker import | P1 |
| **Premiere XML Export** | Adobe Premiere Pro sequence markers | P1 |
| **DaVinci Resolve EDL** | Resolve timeline marker import | P1 |
| **CSV / PDF Shot Log** | Enhanced reports with all metadata fields | P0 |
| **JSON Export** | Raw data export for custom pipelines | P2 |

#### 3.3.6 Modes & Tools

| Feature | Description | Priority |
|---------|-------------|----------|
| **Music Video Mode** | Count-in beats, BPM display, timecode offset for music playback | P1 |
| **Voice Control** | "Clapperboard: Mark take 5" hands-free operation | P1 |
| **Apple Watch Companion** | Remote clap trigger, timecode display, quick mark | P1 |
| **Siri Shortcuts / Android Intents** | OS automation integration | P2 |
| **Widget Support** | Home screen widget showing current timecode / next take | P2 |
| **Camera Wi-Fi Integration** | Auto-detect RED/Sony/Canon record start/stop | P2 |
| **Sound Devices Sync** | Metadata sync with 6-series mixer/recorders | P2 |
| **QR / Barcode Scanning** | Scan lens/filter barcodes into shot log | P2 |
| **AI Speech-to-Script** | Auto-transcribe director's notes into text | P2 |

### 3.4 Feature Priority Summary

| Priority | Definition | Simple | Advanced |
|----------|-----------|--------|----------|
| **P0** | Must have for respective mode launch | All Simple features | Core slate, full FPS, production presets, enhanced exports |
| **P1** | Important, ships in v1.0 or v1.1 | Quick Reset, Take Rating | BLE sync, cloud collaboration, NLE exports, music mode, Watch, voice control |
| **P2** | Nice to have, future release | — | Camera integration, AI features, widgets, QR scanning, web dashboard |

---

## 4. User Flows

### 4.1 Simple Mode: Quick Slate & Clap

```
[First Launch] → [Simple Mode by Default] → [Enter Production Name]
                                      ↓
[Swipe Down on Sticks] → [Clap! Audio + Haptic + Flash]
                                      ↓
[Auto-Save to Local Shot Log] → [Take Counter +1] → [Ready for Next Take]
```

**Time Target:** 3 seconds from app open to clap (with production name already entered).

**Key Design Principle:** No onboarding tutorial. The slate is the interface. Everything is visible. Everything is tappable.

### 4.2 Simple Mode: Review & Export

```
[Tap "Log" Tab] → [Scroll Through Today's Takes]
                    ↓
[Tap Any Take] → [View Scene/Take/Timecode/Notes]
                    ↓
[Tap Share] → [Choose CSV or Text] → [System Share Sheet Appears]
```

### 4.3 Switching to Advanced Mode

```
[Tap "Simple → Advanced" Toggle on Slate] → [Confirmation: "Switch to Advanced?"]
                    ↓
[Advanced Slate Appears with All Fields] → [Contextual Tooltip: "Tap any field to edit"]
                    ↓
[User Customizes Layout → Preferences Persist]
```

**Reverse:** Anytime in Advanced Mode, tap "Advanced → Simple" to return. No data is lost — hidden fields are simply tucked away.

### 4.4 Advanced Mode: Professional Slate & Clap

```
[Select or Create Production Preset] → [Advanced Slate Active with All Fields]
                    ↓
[Adjust Scene/Take/Roll/INT/EXT/DAY/NIGHT as Needed]
                    ↓
[Long-Press Clap Sticks] → [Extended Menu: MOS, Pick-Up, Tail Slate, Add Note]
                    ↓
[Swipe Down to Clap] → [Shot Logged with Full Metadata]
                    ↓
[Auto-Increment; Ready for Next Take]
```

### 4.5 Advanced Mode: Collaboration Flow

```
[Production Owner Creates Project] → [Invites Crew via Link/QR/Email]
                    ↓
[2nd AC Claps on Set] → [Shot Appears in Real-Time on Producer's Device]
                    ↓
[Director Rates Take as "Circle" on Their Device] → [Rating Syncs to All Devices]
                    ↓
[DIT Downloads CSV at Wrap] → [Imports to Dailies Workflow]
```

### 4.6 Advanced Mode: Post-Production Export

```
[Open Shot Log] → [Filter by Date/Scene/Rating/Crew Member] → [Select Shots]
                    ↓
[Tap Export] → [Choose Format: CSV / PDF / Sound Report / FCPXML / Premiere XML / Resolve EDL]
                    ↓
[Preview Export] → [Share via Airdrop / Email / Cloud / Slack]
                    ↓
[Editor Imports → Timecode + Metadata Auto-Matches to Dailies]
```

---

## 5. Technical Architecture

### 5.1 Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Mobile Framework** | React Native 0.76+ | Cross-platform (iOS/Android), near-native performance, large ecosystem |
| **State Management** | Zustand + MMKV | Fast, synchronous state with persistent storage |
| **Navigation** | React Navigation 7 | Native stack, bottom sheets, modals |
| **Timecode Engine** | Custom C++ module (via JSI) | Frame-accurate timecode calculations, shared across platforms |
| **Audio** | react-native-sound + native modules | Precise audio scheduling, custom clap tones |
| **Bluetooth** | react-native-ble-plx | Cross-platform BLE for timecode devices |
| **Backend** | Supabase (PostgreSQL + Edge Functions) | Real-time subscriptions, auth, storage, cost-effective |
| **Cloud Sync** | Supabase Realtime + Offline-first CRDT | Conflict-free sync, works offline |
| **Auth** | Supabase Auth (Magic Link + OAuth) | Passwordless, social login |
| **Export Generation** | Edge Functions (Deno) | Server-side PDF/XML generation without bloating app |
| **Analytics** | PostHog | Privacy-focused, self-hostable, product analytics |
| **Error Tracking** | Sentry | Crash reporting, performance monitoring |
| **CI/CD** | EAS Build (Expo) + GitHub Actions | OTA updates, automated builds |

### 5.2 Data Model

```typescript
// Production (Project)
interface Production {
  id: UUID;
  name: string;
  director: string;
  dp: string; // Director of Photography
  productionCompany?: string;
  dateFormat: 'US' | 'EU' | 'ISO';
  defaultFps: FpsRate;
  defaultRollPrefix: string; // e.g., "A", "B", "CAM1"
  customFields: CustomField[];
  ownerId: UUID;
  createdAt: Timestamp;
}

// Slate Configuration
interface SlateConfig {
  productionId: UUID;
  scene: string; // e.g., "12A"
  take: number;
  roll: string; // e.g., "A001"
  intOrExt: 'INT' | 'EXT' | null;
  dayOrNight: 'DAY' | 'NIGHT' | null;
  mos: boolean;
  ndk: boolean; // Non-Drop Frame / other marker
  pickUp: boolean;
  secondSticks: boolean;
  tailSlate: boolean;
  filters: string; // e.g., "ND.6, Polarizer"
  notes: string;
  fps: FpsRate;
}

// Shot Log Entry
interface ShotLogEntry {
  id: UUID;
  productionId: UUID;
  slateConfig: SlateConfig;
  timecodeIn: Timecode; // Timecode at clap
  timecodeOut?: Timecode; // If camera stop logged
  realTimeStart: Timestamp; // Wall clock
  realTimeEnd?: Timestamp;
  duration?: Frames;
  gpsLocation?: GeoPoint;
  rating: 'circle' | 'print' | 'hold' | 'bad' | null;
  thumbnailUri?: string;
  audioSyncOffset?: Milliseconds; // Detected offset if any
  editorNotes: string;
  deviceId: string;
  syncedAt?: Timestamp;
}

// Timecode
interface Timecode {
  hours: number;
  minutes: number;
  seconds: number;
  frames: number;
  fps: FpsRate;
  dropFrame: boolean;
}

type FpsRate = 23.976 | 24 | 25 | 29.97 | 30 | 50 | 59.94 | 60;
```

### 5.3 Project Structure

```
clapperboard/
├── apps/
│   ├── mobile/                 # React Native app
│   │   ├── src/
│   │   │   ├── app/            # Entry, navigation, providers
│   │   │   ├── features/
│   │   │   │   ├── slate/      # Slate display, clap gesture, animation
│   │   │   │   ├── shotlog/    # History, filtering, rating
│   │   │   │   ├── production/ # Presets, settings, custom fields
│   │   │   │   ├── export/     # Export formats, share sheet
│   │   │   │   ├── sync/       # Cloud sync, collaboration
│   │   │   │   └── timecode/   # Timecode engine, BLE jam sync
│   │   │   ├── components/     # Shared UI components
│   │   │   ├── hooks/          # Reusable hooks
│   │   │   ├── stores/         # Zustand stores
│   │   │   ├── lib/            # Utilities, constants
│   │   │   └── types/          # TypeScript definitions
│   │   └── ios/
│   │   └── android/
│   └── watch/                  # watchOS companion (Swift)
├── packages/
│   ├── timecode-engine/        # C++ timecode library
│   ├── shared-types/           # Shared TS types
│   └── ui-design-system/       # Cross-platform design tokens
├── supabase/
│   ├── migrations/
│   └── functions/              # Edge functions for exports
└── docs/
    ├── PRD.md
    └── DESIGN.md
```

### 5.4 API Design (Supabase Edge Functions)

| Endpoint | Method | Description | Auth |
|----------|--------|-------------|------|
| `/export/csv` | POST | Generate CSV shot log | Required |
| `/export/pdf` | POST | Generate PDF report | Required |
| `/export/fcpxml` | POST | Generate Final Cut Pro XML | Pro Required |
| `/export/premiere` | POST | Generate Premiere XML | Pro Required |
| `/export/resolve` | POST | Generate DaVinci Resolve EDL | Pro Required |
| `/export/sound-report` | POST | Generate sound department PDF | Pro Required |
| `/sync/resolve-conflict` | POST | CRDT conflict resolution | Required |
| `/invite/crew` | POST | Send collaboration invite | Pro Required |

---

## 6. UI/UX Design

### 6.1 Design Principles

1. **Visibility First.** Every element must be readable at 3 feet in bright daylight or a dark soundstage. No thin fonts. No low contrast.
2. **Speed Above All.** The 2nd AC is under pressure. Reduce taps. Reduce cognitive load. Auto-advance what can be auto-advanced.
3. **Familiarity.** The digital slate should feel like a physical slate. Sticks should look like sticks. Fields should map 1:1 to a real clapperboard.
4. **Confidence.** Every action provides immediate, unambiguous feedback. Haptics for clap. Visual flash. Clear sounds.
5. **Professionalism.** This is a tool, not a toy. No playful animations during takes. No distractions.

### 6.2 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `background-primary` | `#000000` | Main slate background (OLED black) |
| `background-elevated` | `#0A0A0A` | Cards, modals |
| `text-primary` | `#FFB800` | Main slate text (amber, like traditional slates) |
| `text-secondary` | `#E0E0E0` | Secondary info, labels |
| `text-inverse` | `#000000` | Text on accent backgrounds |
| `accent-clap` | `#FFFFFF` | Clap sticks (white/black zebra) |
| `accent-success` | `#00C853` | Circle take, sync confirmed |
| `accent-warning` | `#FFAB00` | MOS, warnings |
| `accent-danger` | `#FF1744` | Bad take, errors |
| `accent-info` | `#00B0FF` | Active timecode, Bluetooth |

### 6.3 Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| **Timecode** | SF Mono / Roboto Mono | 48–72pt | Bold |
| **Scene/Take** | SF Pro / Roboto | 36–48pt | Bold |
| **Roll/Production** | SF Pro / Roboto | 24–32pt | Semibold |
| **Labels** | SF Pro / Roboto | 14–16pt | Medium |
| **Body** | SF Pro / Roboto | 16–18pt | Regular |

*All text uses `textRendering: optimizeLegibility` and minimum 4.5:1 contrast ratio.*

### 6.4 Key Screens

#### Screen 1: Active Slate — Simple Mode (Default)
```
┌─────────────────────────────┐
│  MY FILM              [≡]     │  ← Production name, menu
│  DIR: A. Nolan   DOP: J. Doe│  ← Director, DOP
│                             │
│  ┌─────────────────────┐   │
│  │  SCENE: 12A   TAKE: 5│  ← Scene, Take (large)
│  │                     │   │
│  │  01:23:45:12        │   │  ← Timecode (monospace)
│  │  @ 24fps            │   │  ← FPS
│  └─────────────────────┘   │
│                             │
│  ═══════════════════════    │  ← Clapper sticks (swipe down)
│  ▓▓▓▓▓🔊▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │  ← Sound toggle on sticks
│  ═══════════════════════    │
│                             │
│  [📝 Notes] [📋 Log] [⚙️]   │  ← Bottom actions
│           [Advanced →]      │  ← One-tap mode switch
└─────────────────────────────┘
```

**Interactions:**
- **Swipe down** on sticks area → sticks open → release → clap!
- **Tap 🔊** on sticks → toggle beep on/off
- **Tap any field** → inline edit with large keyboard
- **Tap Advanced →** → switch to Advanced Mode (with confirmation on first use)
- **Tap 📝 Notes** → quick note entry before clap
- **Tap 📋 Log** → view today's shot history

#### Screen 2: Active Slate — Advanced Mode
```
┌─────────────────────────────┐
│  [PROD: MY FILM]  [Simple →]│  ← Production, switch to Simple
│  DIR: Nolan  DP: Deakins    │
│  ROLL: A001  [INT] [DAY]   │  ← Roll, INT/EXT, DAY/NIGHT toggles
│                             │
│  ┌─────────────────────┐   │
│  │  SCENE: 12A   TAKE: 5│  ← Scene, Take (large)
│  │  [MOS] [NDK] [PU]    │  ← Toggle badges
│  │                     │   │
│  │  01:23:45:12        │   │  ← Timecode
│  │  @ 24fps  NDF       │   │  ← FPS, Drop/Non-drop
│  │                     │   │
│  │  FILTERS: ND.6, Pol  │  ← Lens/filter info
│  └─────────────────────┘   │
│                             │
│  ═══════════════════════    │  ← Clapper sticks (swipe down)
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    │
│  ═══════════════════════    │
│  (Long-press for menu)      │  ← Extended options hint
│                             │
│  [📋 LOG] [📤 EXP] [⚙️]    │  ← Bottom actions
└─────────────────────────────┘
```

**Additional Interactions:**
- **Tap INT/DAY/MOS/etc.** → toggle badges on/off
- **Long-press sticks** → menu: Pick-Up, Tail Slate, Second Sticks, Voice Note
- **Tap 📤 EXP** → export formats menu (requires cloud sign-in for advanced formats)

#### Screen 3: Shot Log — Simple Mode
```
┌─────────────────────────────┐
│  ← Shot Log             🔍  │
│  Today — 8 shots            │
│                             │
│  12A / T5   10:23:14       │
│  Notes: "Lens flare"       │
│                             │
│  12A / T6   10:25:02       │
│  Notes: "Dog barked"       │
│                             │
│  12B / T1   10:31:55       │
│  👍 / 👎                     │
│                             │
│  [Share as CSV] [Share TXT]│
└─────────────────────────────┘
```

#### Screen 4: Clap Animation (Overlay — Both Modes)
```
┌─────────────────────────────┐
│                             │
│      [sticks open 45°]     │
│           ↓                 │
│      [sticks closed]       │
│           +                 │
│    [full-screen flash]     │
│    [haptic: heavy + sharp] │
│    [audio: clap tone]      │
│                             │
└─────────────────────────────┘
```

- Flash duration: 50ms
- Haptic: `UIImpactFeedbackStyleHeavy` + `UISelectionFeedback` sequence
- Audio: 1kHz tone, 100ms, with subtle reverb option

### 6.5 Accessibility

- **VoiceOver/TalkBack:** Full screen reader support with production context announcements
- **Dynamic Type:** Supports iOS/Android system font scaling up to 310%
- **Color Blindness:** Patterns + color for all status indicators (not color alone)
- **Motor:** Clap can be triggered by assistive switch, voice, or external Bluetooth button
- **Hearing:** Visual flash syncs with clap; waveform visualization available

---

## 7. Performance Requirements

| Requirement | Target | Test Method |
|-------------|--------|-------------|
| App Cold Start | <1.5s | Lighthouse / Xcode Instruments |
| Time to Interactive (Slate) | <2.5s | Manual timing |
| Clap Audio Latency | <5ms | Oscilloscope / audio loopback |
| Timecode Drift (1 hour) | <2 frames | Long-duration benchmark |
| BLE Jam Sync Time | <10s | Stopwatch, 10 repetitions |
| Shot Log Scroll (1000 entries) | 60fps | FPS monitor |
| Export Generation (100 shots) | <3s | Server timing |
| App Size (iOS) | <50MB | Xcode archive |
| App Size (Android) | <40MB | APK analyzer |
| Battery Impact (8h set) | <15% | Device battery log |

---

## 8. Business Model

### 8.1 Philosophy

- **Simple Mode is always free.** No ads. No shot limits. No time limits. No account required. This builds trust and captures the solo creator/student market.
- **Advanced Mode requires subscription.** The subscription unlocks the full professional toolkit: cloud sync, collaboration, NLE exports, BLE timecode, and more.
- **One-week free trial of Advanced.** Users can toggle to Advanced anytime and try all features for 7 days before paying.

### 8.2 Pricing Tiers

| Feature | Simple (Free) | Advanced Individual | Advanced Team |
|---------|---------------|---------------------|---------------|
| Digital slate | ✅ | ✅ | ✅ |
| Gesture clap | ✅ | ✅ | ✅ |
| Scene/take counters | ✅ | ✅ | ✅ |
| Timecode (24/25/30fps) | ✅ | ✅ (full FPS) | ✅ (full FPS) |
| Director & DOP fields | ✅ | ✅ | ✅ |
| Notes field | ✅ | ✅ | ✅ |
| Local shot log | ✅ Unlimited | ✅ Unlimited | ✅ Unlimited |
| CSV / text export | ✅ | ✅ | ✅ |
| Take rating (👍/👎) | ✅ | ✅ (circle/hold/bad) | ✅ (circle/hold/bad) |
| Roll management | ❌ | ✅ | ✅ |
| INT/EXT/DAY/NIGHT/MOS/NDK | ❌ | ✅ | ✅ |
| Pick-up / second sticks / tail | ❌ | ✅ | ✅ |
| Custom fields | ❌ | ✅ | ✅ |
| Production presets | ❌ | ✅ | ✅ |
| Bluetooth timecode jam | ❌ | ✅ | ✅ |
| Cloud sync & backup | ❌ | ✅ | ✅ |
| Real-time collaboration | ❌ | ❌ | ✅ (up to 10 devices) |
| NLE exports (FCPXML, Premiere, Resolve) | ❌ | ✅ | ✅ |
| Sound reports | ❌ | ✅ | ✅ |
| Apple Watch app | ❌ | ✅ | ✅ |
| Voice control | ❌ | ✅ | ✅ |
| Music video mode | ❌ | ✅ | ✅ |
| GPS logging | ❌ | ✅ | ✅ |
| Photo attachments | ❌ | ✅ | ✅ |
| Web dashboard | ❌ | ❌ | ✅ |

**Pricing:**

| Tier | Price | Billing |
|------|-------|---------|
| **Simple** | Free forever | — |
| **Advanced Individual** | $4.99/month or $39.99/year | Auto-renewing subscription |
| **Advanced Team** | $14.99/month per production | Cancel anytime; production data retained |

### 8.3 Revenue Projections (Year 1)

| Metric | Conservative | Target | Optimistic |
|--------|-------------|--------|------------|
| Total Downloads (mostly Simple) | 75,000 | 200,000 | 600,000 |
| Monthly Active Simple Users | 12,000 | 35,000 | 100,000 |
| Simple → Advanced Trial Activation | 5% | 10% | 15% |
| Advanced Individual Conversion | 3% | 6% | 10% |
| Advanced Individual Subscribers | 360 | 2,100 | 15,000 |
| ARPU (Individual) | $35/yr | $35/yr | $35/yr |
| Team Productions | 10 | 80 | 400 |
| ARPU (Team) | $180/yr | $180/yr | $180/yr |
| **Year 1 Revenue** | **$14,400** | **$88,000** | **$597,000** |

**Note:** High Simple user retention (via quality free product) drives organic discovery and word-of-mouth, lowering customer acquisition cost over time.

---

## 9. Implementation Roadmap

### Phase 1: Simple Mode MVP (Weeks 1–6)
**Goal:** A beautiful, functional digital slate that anyone can use in 30 seconds. The core promise: "Download, type your production name, clap."

- [ ] Project setup (React Native, monorepo, CI/CD)
- [ ] Custom timecode engine (C++ JSI module) — 24/25/30fps support
- [ ] Simple Mode slate UI: Production, Director, DOP, Scene, Take, Timecode
- [ ] Gesture clap (swipe down on sticks)
- [ ] Audio beep + haptic feedback
- [ ] Sound toggle (mute/unmute)
- [ ] Scene/take auto-increment + manual override
- [ ] Notes field (per-take)
- [ ] Local shot log storage (SQLite)
- [ ] CSV + plain text export via share sheet
- [ ] High-contrast dark theme (OLED black + amber)
- [ ] iOS + Android parity
- [ ] App Store / Play Store metadata, screenshots
- [ ] Beta TestFlight + Play Console testing (20 filmmakers)

**Deliverable:** v0.9.0 — Simple Mode private beta

### Phase 2: Advanced Mode Core (Weeks 7–12)
**Goal:** Unlock the professional toolkit. Same app, one tap away.

- [ ] Mode toggle (Simple ↔ Advanced) with first-use confirmation
- [ ] Advanced slate: Roll, INT/EXT, DAY/NIGHT, MOS, NDK, Pick-Up, Second Sticks, Tail Slate
- [ ] Full FPS support: 23.976, 24, 25, 29.97, 30, 50, 59.94, 60fps + DF/NDF
- [ ] Production presets (save/recall full configurations)
- [ ] Custom fields (user-defined slate fields)
- [ ] Enhanced shot log with all metadata
- [ ] PDF shot log export
- [ ] Circle/Print/Hold/Bad take ratings + editor notes
- [ ] Voice notes attachment
- [ ] In-app purchase integration (RevenueCat)
- [ ] 7-day Advanced trial flow
- [ ] Apple Watch companion app (remote clap, timecode display)
- [ ] Voice control (Siri / Google Assistant)
- [ ] Music video mode (BPM, count-in, timecode offset)
- [ ] GPS location logging
- [ ] Photo thumbnail attachment

**Deliverable:** v1.0.0 — App Store / Play Store launch (Simple free, Advanced subscription)

### Phase 3: Sync & Collaboration (Weeks 13–20)
**Goal:** Turn Clapperboard into a team tool.

- [ ] Supabase backend + auth (magic link, social OAuth)
- [ ] Cloud sync + backup (offline-first architecture)
- [ ] Bluetooth timecode jam (Tentacle Sync E, Atomos, UltraSync BLUE)
- [ ] Real-time collaboration (multi-device sync)
- [ ] Team invites (link, QR, email)
- [ ] Sound report PDF generation
- [ ] FCPXML / Premiere XML / DaVinci Resolve EDL export
- [ ] JSON export for custom pipelines
- [ ] Web dashboard for producers
- [ ] Role-based permissions (Viewer, Logger, Admin)
- [ ] Analytics + crash reporting (PostHog, Sentry)

**Deliverable:** v1.5.0 — Team-ready professional tool

### Phase 4: Ecosystem (Weeks 21–32)
**Goal:** Deep integration with the professional filmmaking ecosystem.

- [ ] Camera Wi-Fi integration (RED, Sony, Canon)
- [ ] Sound Devices 6-series sync
- [ ] QR / barcode scanning (lens/filter inventory)
- [ ] AI speech-to-script notes
- [ ] Siri Shortcuts / Android Intents deep integration
- [ ] Widget support (timecode, next take)
- [ ] Public API for third-party integrations
- [ ] Localization (Spanish, French, German, Japanese, Chinese)
- [ ] Accessibility audit + improvements

**Deliverable:** v2.0.0 — "The modern standard for digital slates"

---

## 10. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **Simple users never try Advanced** | Medium | High | 7-day trial triggered automatically on first mode switch; contextual prompts when users hit "power user" behavior (e.g., 20+ shots in one session) |
| **Timecode drift on mobile** | Medium | High | Custom native timecode engine; warn users about backgrounding; optional external timecode generator in Advanced |
| **BLE device fragmentation** | High | Medium | Support top 3 devices first (Tentacle, Atomos, UltraSync); graceful degradation to internal clock |
| **MovieSlate patent/IP issues** | Low | High | Legal review before launch; differentiate on UX (two-mode design) and features, not clones |
| **Advanced features feel overwhelming** | Medium | Medium | Progressive disclosure: fields appear only when toggled; Simple mode is always one tap away; onboarding tooltips |
| **Low conversion from free Simple** | Medium | High | Generous free tier builds goodwill; advanced features are genuinely pro-only; educational discounts; referral program |
| **Android fragmentation (BLE)** | High | Medium | Extensive device testing matrix; fallback manual timecode entry |
| **Audio sync latency inconsistency** | Medium | High | Rigorous testing across devices; configurable offset per device; visual waveform verification in Advanced |
| **Cloud sync conflicts** | Medium | Medium | CRDT architecture; conflict resolution UI; audit log |
| **User confusion about what's free vs paid** | Medium | Medium | Clear in-app badges: "Advanced" label on paid features; trial banner with clear CTA; no paywalls in Simple mode |

---

## 11. Appendix

### 11.1 Glossary

| Term | Definition |
|------|-----------|
| **2nd AC** | Second Assistant Camera — operates slate, loads media, manages lenses |
| **DOP / DP** | Director of Photography — head of camera/lighting department |
| **MOS** | Mit Out Sound — shot without synchronized sound |
| **NDK / NDF** | Non-Drop Frame timecode marker |
| **Pick-Up** | Resuming a shot from a specific point, not from the top |
| **Second Sticks** | A second clap used when the first was missed or unclear |
| **Tail Slate** | Slate recorded at the *end* of a take instead of the beginning |
| **Circle Take** | A take the director wants the editor to prioritize |
| **Jam Sync** | Synchronizing timecode between devices |
| **FPS** | Frames Per Second |
| **DF / NDF** | Drop Frame / Non-Drop Frame timecode |
| **Simple Mode** | The minimal, default clapperboard experience — always free |
| **Advanced Mode** | The full professional toolkit — subscription required |

### 11.2 Reference Materials
- [StudioBinder: How to Use a Film Slate](https://www.studiobinder.com/blog/how-to-use-a-film-slate/)
- [In Depth Cine: Clapperboard Guide](https://www.indepthcine.com/videos/clapperboard)
- MovieSlate 8 Feature Documentation
- Timecode Marker (BIG STORY FILMMAKING SERVICE) — App Store research
- SMPTE 12M Timecode Standard

### 11.3 Change Log

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-17 | Initial PRD draft |
| 1.1.0 | 2026-05-17 | Added Marker (Timecode Marker) to competitive analysis; restructured entire product into Simple Mode (free) and Advanced Mode (subscription) with explicit feature separation, updated user flows, UI mockups, business model, roadmap, and risk analysis |

---

*End of Document*
