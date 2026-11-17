# How the illustrations were made

All images are generated, not photographs, and none come from the GSMA report.

- Program: ComfyUI (local), saved workflow template `z_image_turbo`.
- Model: `z_image_turbo_bf16.safetensors`, text encoder `qwen_3_4b.safetensors` (type lumina2), VAE `ae.safetensors`.
- Settings: 8 steps, cfg 1.0, sampler `res_multistep`, scheduler `simple`, ModelSamplingAuraFlow shift 3.0, denoise 1.0, empty negative (ConditioningZeroOut).
- Size: 1600 x 896 for wide images, 1024 x 1344 for the three tall `kind-*` images.
- After generation: saved as progressive JPEG, quality 84.
- To regenerate one: load the template, paste the prompt, set the size and the seed below.

Every prompt ends with the same style sentence, shown here once:

> STYLE: Deep dusk, ink-navy and charcoal tones with a single warm coral-red light source, subtle atmospheric haze, fine film grain, moody, quiet, minimal, large areas of dark negative space. Photorealistic, anamorphic lens, volumetric light. No people in the foreground, no faces, no text, no logos, no signs.

| File | Used on | Seed | Prompt (before the style sentence) |
|---|---|---|---|
| `cover.jpg` | Cover | 201 | (Replaced 16 Nov 2026: A. found the first one too dark. This one has its own, brighter style sentence, written out in full.) Cinematic ultra-wide panorama at blue hour from a high mountain viewpoint. A huge bay with a sprawling coastal city, thousands of tiny warm lights spreading along the shore and up the valleys, layered mountain ridges fading into haze. The sky is luminous: a broad vivid band of coral-red and amber afterglow along the whole horizon, blending upward into rich deep blue with a few first stars. The glow reflects brightly on the calm water. A few slender telecom masts as small silhouettes on a near ridge. STYLE: Twilight, ink-navy and deep blue tones with a strong warm coral-red and amber glow, clear air with light atmospheric haze, fine film grain, majestic, calm, rich colour, well exposed with visible detail in the land. Photorealistic, anamorphic lens, volumetric light. No people, no faces, no text, no logos, no signs. |
| `kind-low.jpg` | Kinds view, low | 202 | (Replaced 16 Nov 2026: too dark. Own style sentence, in full.) A huge open valley of farmland, rice fields and forest seen from a hill at golden dusk, a winding river catching the light, a few tiny scattered farmhouses with warm lit windows far apart. A wide soft coral and amber glow spreads low across the whole horizon and washes over the fields, so the land is clearly visible and softly lit, with long gentle highlights on the fields and water. Low sun just below the horizon, bright glowing sky filling the upper half. STYLE: Dusk, ink-navy shadows with a strong warm coral-red and amber glow, light atmospheric haze, fine film grain, calm, spacious, well exposed with visible detail in the land. Photorealistic, anamorphic lens, volumetric light. No people, no faces, no text, no logos, no signs. |
| `kind-mid.jpg` | Kinds view, mid | 102 | A large city seen from above at dusk, a dense even carpet of small warm lights stretching to the horizon, coral light glowing from the streets between dark buildings. |
| `kind-high.jpg` | Kinds view, high | 103 | A single stadium seen from far away at night in a dark city, glowing intensely coral-red from inside like a bowl of light, a tight concentrated glow rising above it, everything around it dark. |
| `low-1.jpg` | 600, 700 MHz | 111 | Remote terraced hills and rice fields at dusk, wide aerial view, two or three small houses with lit windows, one very thin distant mast silhouette on a far ridge, a broad soft coral glow rolling across the hills for many kilometres. |
| `low-2.jpg` | 800, 850, 900 MHz | 112 | A quiet village street at dusk, old houses with thick walls and warmly lit windows, coral light glowing from inside the rooms, misty hills behind, wide shot. |
| `mid-1.jpg` | 1500, 1800 + 2.1, PCS + AWS | 113 | Suburbs at dusk seen from a hillside, a highway with long coral-red light trails leading toward a distant city skyline, low mist between the houses. |
| `mid-2.jpg` | 2.3, 2.6, 3.5 GHz | 114 | A dense modern city skyline at dusk across a wide river, thousands of small lights, a band of coral light along the waterfront reflecting on the dark water. |
| `mid-3.jpg` | 4.5, 6 GHz | 115 | A large container port and industrial district at night seen from above, cranes as dark silhouettes, rows of coral-red lights along the quays, faint haze, the city glowing far behind. |
| `high-1.jpg` | 26 + 28 GHz | 116 | Aerial view straight down toward a packed stadium at night, the pitch and stands a tight intense pool of coral-red light, the surrounding blocks almost black. |
| `high-2.jpg` | 40, 50, 66 GHz | 117 | A vast empty railway station hall at night, long platforms, glass roof, streaks of coral-red light from a passing train in long exposure, distant blurred silhouettes only. |
| `next.jpg` | What comes next | 118 | The curved horizon of the Earth before dawn seen from very high altitude above clouds, a thin bright coral line of first light along the horizon, dark sky with faint stars above. |
