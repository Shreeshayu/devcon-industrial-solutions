import shutil, os

src = ".agents/outputs/pdf-images"
dst_root = "artifacts/devcon-website/public/images"

os.makedirs(f"{dst_root}/logo", exist_ok=True)
os.makedirs(f"{dst_root}/darshana", exist_ok=True)
os.makedirs(f"{dst_root}/smc", exist_ok=True)
os.makedirs(f"{dst_root}/bray", exist_ok=True)
os.makedirs(f"{dst_root}/lt", exist_ok=True)
os.makedirs(f"{dst_root}/pennant", exist_ok=True)
os.makedirs(f"{dst_root}/belts", exist_ok=True)
os.makedirs(f"{dst_root}/gallery", exist_ok=True)

copies = [
    # Logo (page 1 has company emblem)
    ("page01_img01_1620x410.jpeg", "logo/header-banner.jpeg"),

    # Darshana (page 2)
    ("page02_img01_706x470.jpeg", "darshana/handles.jpeg"),
    ("page02_img02_1063x709.jpeg", "darshana/locks.jpeg"),
    ("page02_img03_666x709.jpeg", "darshana/three-point-locks.jpeg"),
    ("page02_img04_701x709.jpeg", "darshana/hinges.jpeg"),
    ("page02_img05_681x454.jpeg", "darshana/gaskets.jpeg"),
    ("page02_img07_676x474.jpeg", "darshana/clamping-connectors.jpeg"),
    ("page02_img08_683x479.jpeg", "darshana/flexible-mountings.jpeg"),
    ("page02_img09_1063x709.jpeg", "darshana/conveyor-accessories.jpeg"),
    ("page02_img10_675x463.jpeg", "darshana/cable-management.jpeg"),
    ("page02_img11_685x457.jpeg", "darshana/aluminium-door-frame.jpeg"),
    ("page02_img12_1063x709.jpeg", "darshana/console-accessories.jpeg"),
    ("page02_img13_670x709.jpeg", "darshana/support-arm-systems.jpeg"),
    ("page02_img14_692x473.jpeg", "darshana/aluminium-section-accessories.jpeg"),

    # SMC (page 3 — 236x122 tiles)
    ("page03_img01_236x122.jpeg", "smc/directional-control-valves.jpeg"),
    ("page03_img02_236x122.jpeg", "smc/air-cylinders.jpeg"),
    ("page03_img03_236x122.jpeg", "smc/rotary-actuators.jpeg"),
    ("page03_img04_236x122.jpeg", "smc/electric-actuators.jpeg"),
    ("page03_img05_236x122.jpeg", "smc/vacuum-equipment.jpeg"),
    ("page03_img06_236x122.jpeg", "smc/air-preparation.jpeg"),
    ("page03_img07_236x122.jpeg", "smc/pressure-control.jpeg"),
    ("page03_img08_236x122.jpeg", "smc/lubrication.jpeg"),
    ("page03_img09_236x122.jpeg", "smc/fittings-tubing.jpeg"),
    ("page03_img10_236x122.jpeg", "smc/flow-control.jpeg"),
    ("page03_img11_236x122.jpeg", "smc/silencers.jpeg"),
    ("page03_img12_236x122.jpeg", "smc/sensors.jpeg"),
    ("page03_img13_236x122.jpeg", "smc/static-neutralization.jpeg"),
    ("page03_img14_236x122.jpeg", "smc/process-valves.jpeg"),
    ("page03_img15_225x183.jpeg", "smc/placeholder.jpeg"),
    ("page03_img16_236x122.jpeg", "smc/chemical-liquid-valves.jpeg"),
    ("page03_img17_236x122.jpeg", "smc/process-pumps.jpeg"),
    ("page03_img18_236x122.jpeg", "smc/temperature-control.jpeg"),
    ("page03_img19_236x122.jpeg", "smc/hydraulic.jpeg"),
    ("page03_img20_236x122.jpeg", "smc/high-vacuum.jpeg"),
    ("page03_img21_236x122.jpeg", "smc/industrial-filters.jpeg"),
    ("page03_img22_236x122.jpeg", "smc/pneumatic-instrumentation.jpeg"),

    # Bray Controls (page 4)
    ("page04_img02_505x606.jpeg", "bray/valve-1.jpeg"),
    ("page04_img03_506x607.jpeg", "bray/valve-2.jpeg"),
    ("page04_img04_507x609.jpeg", "bray/valve-3.jpeg"),
    ("page04_img05_507x609.jpeg", "bray/valve-4.jpeg"),
    ("page04_img06_504x606.jpeg", "bray/valve-5.jpeg"),
    ("page04_img07_504x605.jpeg", "bray/valve-6.jpeg"),

    # L&T Valves (page 4)
    ("page04_img08_254x351.jpeg", "lt/valve-1.jpeg"),
    ("page04_img09_246x343.jpeg", "lt/valve-2.jpeg"),
    ("page04_img10_254x350.jpeg", "lt/valve-3.jpeg"),
    ("page04_img11_344x383.jpeg", "lt/valve-4.jpeg"),
    ("page04_img12_311x295.jpeg", "lt/valve-5.jpeg"),
    ("page04_img14_255x470.jpeg", "lt/valve-6.jpeg"),
    ("page04_img15_269x547.jpeg", "lt/valve-7.jpeg"),
    ("page04_img16_506x607.jpeg", "lt/valve-8.jpeg"),
    ("page04_img17_505x607.jpeg", "lt/valve-9.jpeg"),

    # Pennant Engineering (page 5)
    ("page05_img02_172x152.jpeg", "pennant/thermodynamic-steam-trap.jpeg"),
    ("page05_img03_190x177.jpeg", "pennant/inverted-bucket-steam-trap.jpeg"),
    ("page05_img04_204x193.jpeg", "pennant/ball-float-steam-trap.jpeg"),
    ("page05_img05_209x157.jpeg", "pennant/thermostatic-steam-trap.jpeg"),
    ("page05_img06_383x265.jpeg", "pennant/liquid-drain-trap.jpeg"),
    ("page05_img07_252x234.jpeg", "pennant/clean-steam-trap.jpeg"),
    ("page05_img08_251x211.jpeg", "pennant/air-vent.jpeg"),
    ("page05_img09_286x235.jpeg", "pennant/air-eliminator.jpeg"),
    ("page05_img10_167x128.jpeg", "pennant/strainer.jpeg"),
    ("page05_img11_158x118.jpeg", "pennant/piston-valve.jpeg"),
    ("page05_img12_181x127.jpeg", "pennant/pressure-reducing-valve.jpeg"),
    ("page05_img13_134x98.jpeg", "pennant/eccentric-rotary-valve.jpeg"),

    # Power Transmission Belts (page 6)
    ("page06_img07_195x129.jpeg", "belts/brand-logo-1.jpeg"),
    ("page06_img08_379x152.jpeg", "belts/mitsuboshi.jpeg"),
    ("page06_img09_374x150.jpeg", "belts/hutchinson.jpeg"),
    ("page06_img10_379x152.jpeg", "belts/megadyne.jpeg"),
    ("page06_img11_371x148.jpeg", "belts/nitta.jpeg"),
    ("page06_img12_377x151.jpeg", "belts/volta.jpeg"),
    ("page06_img13_374x150.jpeg", "belts/steigentech.jpeg"),

    # Custom Assemblies Gallery (page 7)
    ("page07_img01_827x620.jpeg", "gallery/valve-manifold-die-casting.jpeg"),
    ("page07_img02_482x271.jpeg", "gallery/valve-manifold-water-purification.jpeg"),
    ("page07_img03_337x450.jpeg", "gallery/air-pressure-booster.jpeg"),
    ("page07_img04_450x337.jpeg", "gallery/jacketed-ball-valve.jpeg"),
    ("page07_img05_325x434.jpeg", "gallery/dual-stroke-cylinder-1.jpeg"),
    ("page07_img06_569x427.jpeg", "gallery/dual-stroke-cylinder-2.jpeg"),
    ("page07_img08_355x632.jpeg", "gallery/dual-stroke-cylinder-3.jpeg"),
    ("page07_img09_637x478.jpeg", "gallery/valve-manifold-komori.jpeg"),
    ("page07_img10_829x622.jpeg", "gallery/valve-manifold-blow-moulding.jpeg"),
    ("page07_img11_774x1032.jpeg", "gallery/pneumatic-panel-paint-booth.jpeg"),
    ("page07_img12_607x455.jpeg", "gallery/custom-assembly-1.jpeg"),
    ("page07_img13_611x458.jpeg", "gallery/custom-assembly-2.jpeg"),
    ("page07_img14_612x459.jpeg", "gallery/solenoid-valves-komori.jpeg"),
    ("page07_img15_286x382.jpeg", "gallery/custom-assembly-3.jpeg"),
    ("page07_img16_392x294.jpeg", "gallery/custom-assembly-4.jpeg"),
    ("page07_img17_469x264.jpeg", "gallery/custom-assembly-5.jpeg"),
]

ok = 0
for fname, dest in copies:
    src_path = f"{src}/{fname}"
    dst_path = f"{dst_root}/{dest}"
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst_path)
        ok += 1
    else:
        print(f"MISSING: {src_path}")

print(f"Copied {ok}/{len(copies)} images to public/images/")
