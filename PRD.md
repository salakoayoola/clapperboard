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

| Segment | Description | Needs |
|---------|-------------|-------|
| **Primary: 2nd ACs / Camera Assistants** | The traditional slate operators on professional sets | Speed, accuracy, visibility, protocol compliance |
| **Primary: Sound Recordists** | Need synchronized metadata and clean sync marks | Timecode jam sync, waveform-accurate clap, notes |
| **Secondary: Indie Filmmakers** | One-person crews shooting passion projects | Free tier, simplicity, essential features only |
| **Secondary: Content Creators / YouTubers** | Solo operators with mirrorless/DSLR setups | Auto-advance, music mode, social-friendly exports |
| **Tertiary: Production Coordinators** | Manage data flow from set to post | Reports, cloud sync, CSV/EDL exports |

### 1.3 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Day-7 Retention (free tier) | >35% | In-app analytics |
| Pro Conversion Rate | >4% | Revenue tracking |
| Average Shots Logged/Session | >12 | In-app analytics |
| App Store Rating | >4.6★ | iOS App Store, Google Play |
| Sync Accuracy | ±1 frame @ 24fps | Technical benchmarking |
| Time-to-Slate (open app → clap) | <3 seconds | UX benchmarking |

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

### 3.1 Core Features (P0 — MVP)

| Feature | Description | Priority | Status |
|---------|-------------|----------|--------|
| **Digital Slate Display** | High-contrast, customizable slate with all standard fields | P0 | 🔲 |
| **Gesture Clap** | Swipe down, shake, or double-tap to clap; synchronized audio + visual | P0 | 🔲 |
| **Scene/Take/Roll Management** | Auto-incrementing counters with manual override, pick-up markers | P0 | 🔲 |
| **Multi-FPS Timecode** | 23.976, 24, 25, 29.97, 30, 50, 59.94, 60fps with drop-frame support | P0 | 🔲 |
| **Shot Logging** | Every clap saves production metadata to local history | P0 | 🔲 |
| **MOS / NDK / Pick-Up Markers** | One-tap toggles for common slate annotations | P0 | 🔲 |
| **Production Presets** | Save recurring productions (title, director, DP, date format) | P0 | 🔲 |
| **High-Contrast Dark Mode** | OLED-optimized black background with bright amber/white text | P0 | 🔲 |
| **Audio Sync Tone** | Configurable beep/clap sound at exact frame of clap closure | P0 | 🔲 |
| **Basic Export** | CSV + PDF shot log export via share sheet | P0 | 🔲 |

### 3.2 Pro Features (P1 — Launch or V1.1)

| Feature | Description | Priority | Status |
|---------|-------------|----------|--------|
| **Bluetooth Timecode Jam** | Sync with Tentacle Sync E, Atomos AtomX SYNCS, UltraSync BLUE | P1 | 🔲 |
| **Cloud Collaboration** | Real-time shot log sharing with crew members | P1 | 🔲 |
| **Advanced Export** | FCPXML, Premiere XML, DaVinci Resolve EDL, Sound Reports | P1 | 🔲 |
| **Voice Control** | "Clapperboard: Mark take 5" hands-free operation | P1 | 🔲 |
| **Apple Watch Companion** | Remote clap trigger, timecode display, quick mark | P1 | 🔲 |
| **Photo/Thumbnail Attach** | Attach reference still or slate photo to each shot log entry | P1 | 🔲 |
| **Custom Fields** | User-defined slate fields (e.g., VFX ID, LUT name, lens serial) | P1 | 🔲 |
| **Music Video Mode** | Count-in beats, BPM display, timecode offset for music playback | P1 | 🔲 |
| **GPS Location Logging** | Auto-tag each shot with coordinates for location management | P1 | 🔲 |
| **Rate Shots** | Circle takes (good), mark as unusable, add editor notes | P1 | 🔲 |

### 3.3 Future Features (P2 — V2.0+)

| Feature | Description | Priority | Status |
|---------|-------------|----------|--------|
| **Camera Wi-Fi Integration** | Auto-detect camera record start/stop (RED, Sony, Canon) | P2 | 🔲 |
| **Sound Devices Sync** | Metadata sync and transport control with 6-series mixers | P2 | 🔲 |
| **QR/Barcode Scanner** | Scan lens/filter barcodes into shot log automatically | P2 | 🔲 |
| **AI Speech-to-Script** | Auto-transcribe director's "action" calls into notes | P2 | 🔲 |
| **Team Permissions** | Role-based access (PA can view, 2nd AC can edit, producer can export) | P2 | 🔲 |
| **Offline Mode** | Full functionality without internet, sync when reconnected | P2 | 🔲 |
| **Widget Support** | Home screen widget showing current timecode / next take number | P2 | 🔲 |
| **Siri Shortcuts / Android Intents** | Deep integration with OS automation | P2 | 🔲 |

---

## 4. User Flows

### 4.1 Primary Flow: Quick Slate & Clap

```
[Open App] → [Select or Create Production Preset] → [Slate Display Active]
                                      ↓
[Swipe Down / Shake / Double-Tap] → [Sticks Open Animation]
                                      ↓
[Release / Second Tap] → [Clap! Audio + Haptic + Flash]
                                      ↓
[Auto-Save to Shot Log] → [Take Counter Increments] → [Ready for Next Take]
```

**Time Target:** 3 seconds from app open to clap (with preset already selected).

### 4.2 Secondary Flow: Logging a Complex Shot

```
[Slate Active] → [Tap Field to Edit] → [Adjust Scene/Take/Roll/Notes]
                    ↓
[Tap MOS Toggle] → [MOS Badge Appears on Slate]
                    ↓
[Long-press Clap] → [Extended Clap Menu: "Mark Pick-Up", "Mark Second Sticks", "Add Note"]
                    ↓
[Select "Add Note"] → [Voice-to-text or Keyboard] → [Save Note]
                    ↓
[Swipe to Clap] → [Shot Logged with Full Metadata + Note]
```

### 4.3 Post-Production Flow

```
[Open Shot Log] → [Filter by Date/Scene/Rating] → [Select Shots]
                    ↓
[Tap Export] → [Choose Format: CSV / PDF / FCPXML / Premiere XML / Resolve EDL]
                    ↓
[Preview Export] → [Share via Airdrop / Email / Cloud / Slack]
                    ↓
[Editor Imports → Timecode + Metadata Auto-Matches to Dailies]
```

### 4.4 Collaboration Flow (Pro)

```
[Production Owner Creates Project] → [Invites Crew via Link/Email]
                    ↓
[2nd AC Claps on Set] → [Shot Appears in Real-Time on Producer's iPad]
                    ↓
[Director Rates Take as "Circle" on Their Device] → [Rating Syncs to All Devices]
                    ↓
[DIT Downloads CSV at Wrap] → [Imports to Dailies Workflow]
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

#### Screen 1: Active Slate (Main)
```
┌─────────────────────────────┐
│  [PROD: MY FILM]    [≡]     │  ← Production name, menu
│  DIR: A. Nolan   DP: R. Deak│  ← Director, DP
│                             │
│  ┌─────────────────────┐   │
│  │  ROLL: A001         │   │  ← Roll number (auto)
│  │  SCENE: 12A   TAKE: 5│  ← Scene, Take (large)
│  │  INT.  NIGHT        │   │  ← INT/EXT, DAY/NIGHT
│  │  MOS  NDK  PU       │   │  ← Toggle badges
│  │                     │   │
│  │  01:23:45:12        │   │  ← Timecode (monospace)
│  │  @ 24fps            │   │  ← FPS indicator
│  └─────────────────────┘   │
│                             │
│  ═══════════════════════    │  ← Clapper sticks (swipe area)
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    │  ← Zebra pattern
│  ═══════════════════════    │
│                             │
│  [📋 LOG] [📤 EXP] [⚙️]    │  ← Bottom actions
└─────────────────────────────┘
```

**Interactions:**
- **Swipe down** on sticks area → sticks open → release → clap!
- **Double-tap** anywhere on slate → instant clap (configurable)
- **Shake** device → clap (configurable, with debounce)
- **Long-press** on sticks → extended options menu
- **Tap any field** → inline edit with large numpad/keyboard

#### Screen 2: Shot Log
```
┌─────────────────────────────┐
│  ← Shot Log           [🔍]  │
│  Today — 24 shots           │
│                             │
│  ⭕ 12A / T5   10:23:14    │  ← Circle take (green)
│     MOS | A001 | 01:23:45  │
│                             │
│  ✕ 12A / T6   10:25:02    │  ← Bad take (red)
│     SYNC | A001 | 01:25:12 │
│                             │
│  ○ 12B / T1   10:31:55    │  ← Hold (yellow)
│     NDK | A001 | 01:31:02  │
│                             │
│  [Floating: + Quick Slate]  │
└─────────────────────────────┘
```

**Interactions:**
- **Tap entry** → detail view with notes, thumbnail, GPS
- **Swipe left** → rate (circle / hold / bad)
- **Swipe right** → duplicate (for pick-up)
- **Pull down** → sync status / refresh

#### Screen 3: Clap Animation (Overlay)
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

### 8.1 Pricing Tiers

| Feature | Free | Pro ($4.99/mo or $39.99/yr) | Team ($14.99/mo per production) |
|---------|------|---------------------------|--------------------------------|
| Unlimited slates | ✅ | ✅ | ✅ |
| Shot logging | Up to 50 shots/project | Unlimited | Unlimited |
| CSV/PDF export | ✅ | ✅ | ✅ |
| Cloud sync | ❌ | ✅ | ✅ |
| Bluetooth timecode | ❌ | ✅ | ✅ |
| FCPXML/Premiere/Resolve | ❌ | ✅ | ✅ |
| Voice control | ❌ | ✅ | ✅ |
| Apple Watch | ❌ | ✅ | ✅ |
| Custom fields | 1 field | Unlimited | Unlimited |
| Collaboration | ❌ | 2 devices | 10 devices |
| Sound reports | ❌ | ✅ | ✅ |
| Priority support | ❌ | Email | Slack + phone |

### 8.2 Revenue Projections (Year 1)

| Metric | Conservative | Target | Optimistic |
|--------|-------------|--------|------------|
| Downloads (free) | 50,000 | 150,000 | 500,000 |
| Monthly Active Users | 8,000 | 25,000 | 80,000 |
| Pro Conversion Rate | 2% | 4% | 7% |
| Pro Subscribers | 160 | 1,000 | 5,600 |
| ARPU (Pro) | $35/yr | $35/yr | $35/yr |
| Team Accounts | 5 | 50 | 300 |
| ARPU (Team) | $180/yr | $180/yr | $180/yr |
| **Year 1 Revenue** | **$6,500** | **$44,000** | **$250,000** |

---

## 9. Implementation Roadmap

### Phase 1: MVP (Weeks 1–8)
**Goal:** Core slate + clap + shot log + basic export. Usable on day one of a real shoot.

- [ ] Project setup (React Native, monorepo, CI/CD)
- [ ] Custom timecode engine (C++ JSI module)
- [ ] Slate UI with high-contrast design
- [ ] Gesture clap (swipe, shake, double-tap)
- [ ] Scene/Take/Roll auto-increment
- [ ] MOS / NDK / Pick-Up toggles
- [ ] Production presets
- [ ] Local shot log storage (SQLite/MMKV)
- [ ] CSV + PDF export
- [ ] iOS + Android parity
- [ ] Beta TestFlight + Play Console testing

**Deliverable:** v0.9.0 — Private beta with 20 filmmakers

### Phase 2: Pro Features (Weeks 9–16)
**Goal:** Professional-grade tool ready for paid launch.

- [ ] Supabase backend + auth
- [ ] Cloud sync + offline-first architecture
- [ ] Bluetooth timecode jam (Tentacle, Atomos)
- [ ] FCPXML / Premiere XML / Resolve EDL export
- [ ] Voice control integration
- [ ] Apple Watch companion app
- [ ] Photo thumbnail attachment
- [ ] Custom fields
- [ ] Music video mode
- [ ] GPS logging
- [ ] Shot rating system
- [ ] In-app purchase integration (RevenueCat)
- [ ] Analytics + crash reporting

**Deliverable:** v1.0.0 — App Store / Play Store launch

### Phase 3: Scale & Integrate (Weeks 17–28)
**Goal:** Team features and camera ecosystem integration.

- [ ] Real-time collaboration (multi-device sync)
- [ ] Team permissions + roles
- [ ] Camera Wi-Fi integration (RED, Sony, Canon)
- [ ] Sound Devices 6-series sync
- [ ] QR/barcode scanning
- [ ] AI speech-to-script notes
- [ ] Widget support
- [ ] Siri Shortcuts / Android Intents
- [ ] Web dashboard for producers
- [ ] Public API for integrations

**Deliverable:** v2.0.0 — "The modern standard for digital slates"

---

## 10. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **Timecode drift on mobile** | Medium | High | Custom native timecode engine; warn users about backgrounding; optional external timecode generator |
| **BLE device fragmentation** | High | Medium | Support top 3 devices first (Tentacle, Atomos, UltraSync); graceful degradation to internal clock |
| **MovieSlate patent/IP issues** | Low | High | Legal review before launch; differentiate on features, not clones |
| **Low conversion on free tier** | Medium | High | Generous free tier builds goodwill; pro features are genuinely pro-only; offer educational discounts |
| **Android fragmentation (BLE)** | High | Medium | Extensive device testing matrix; fallback manual timecode entry |
| **Audio sync latency inconsistency** | Medium | High | Rigorous testing across devices; configurable offset per device; visual waveform verification |
| **Cloud sync conflicts** | Medium | Medium | CRDT architecture; conflict resolution UI; audit log |

---

## 11. Appendix

### 11.1 Glossary

| Term | Definition |
|------|-----------|
| **2nd AC** | Second Assistant Camera — operates slate, loads media, manages lenses |
| **MOS** | Mit Out Sound — shot without synchronized sound |
| **NDK** | Non-Drop Frame (or other production-specific marker) |
| **Pick-Up** | Resuming a shot from a specific point, not from the top |
| **Second Sticks** | A second clap used when the first was missed or unclear |
| **Tail Slate** | Slate recorded at the *end* of a take instead of the beginning |
| **Circle Take** | A take the director wants the editor to prioritize |
| **Jam Sync** | Synchronizing timecode between devices |
| **FPS** | Frames Per Second |
| **DF/NDF** | Drop Frame / Non-Drop Frame timecode |

### 11.2 Reference Materials
- [StudioBinder: How to Use a Film Slate](https://www.studiobinder.com/blog/how-to-use-a-film-slate/)
- [In Depth Cine: Clapperboard Guide](https://www.indepthcine.com/videos/clapperboard)
- MovieSlate 8 Feature Documentation
- SMPTE 12M Timecode Standard

### 11.3 Change Log

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-17 | Initial PRD draft |

---

*End of Document*
