"""
Patch all major section h2/h1 headings in homepage components
to use ElectricHeading, so hovering letters flash electric blue.
"""
import os, re

BASE = "/home/ubuntu/lift-media/client/src/components"
IMP = 'import ElectricHeading from "@/components/ElectricHeading";'

def add_import(filepath):
    with open(filepath) as f:
        content = f.read()
    if IMP in content:
        return content
    lines = content.split("\n")
    for i, line in enumerate(lines):
        if line.startswith("import "):
            lines.insert(i + 1, IMP)
            break
    return "\n".join(lines)

def swap_heading(content, tag, style_snippet, children):
    """Replace <tag style={...}>children</tag> with <ElectricHeading as="tag" style={...}>children</ElectricHeading>"""
    old = f'<{tag} style={{{{{style_snippet}}}}}>\n{children}\n'
    new = f'<ElectricHeading as="{tag}" style={{{{{style_snippet}}}}}>\n{children}\n'
    if old in content:
        content = content.replace(old, new, 1)
        content = content.replace(f'{children}\n          </{tag}>', f'{children}\n          </ElectricHeading>', 1)
        return content, True
    return content, False

files = {
    "ServicesSection.tsx": [
        ('h2',
         'fontFamily: "\'Plus Jakarta Sans\', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em"',
         '            Resources Built For You.')
    ],
    "ContentMultiplicationSection.tsx": [
        ('h2',
         'fontFamily: "\'Plus Jakarta Sans\', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.1',
         '              Turn One Coaching Moment Into Weeks Of Marketing.')
    ],
    "LeadMagnetsSection.tsx": [
        ('h2',
         'fontFamily: "\'Plus Jakarta Sans\', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em"',
         '            Your Gym Already Has Great Content.')
    ],
    "FAQSection.tsx": [
        ('h2',
         'fontFamily: "\'Plus Jakarta Sans\', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em"',
         '            Questions Gym Owners Ask')
    ],
    "ProcessSection.tsx": [
        ('h2',
         'fontFamily: "\'Plus Jakarta Sans\', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em"',
         '            Simple. Systematic. Scalable.')
    ],
    "CaseStudiesSection.tsx": [
        ('h2',
         'fontFamily: "\'Plus Jakarta Sans\', sans-serif", fontWeight: 800, fontSize: "clamp(1.625rem, 6vw, 3rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em"',
         '            Real Gyms. Real Results.')
    ],
    "NewsletterSection.tsx": [
        ('h2',
         'fontFamily: "\'Plus Jakarta Sans\', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#F0F0F5", marginTop: "0.75rem", marginBottom: "1rem", letterSpacing: "-0.02em", lineHeight: 1.15',
         '              Marketing Advice Gym Owners Actually Need.')
    ],
    "FinalCTASection.tsx": [
        ('h2',
         'fontFamily: "\'Plus Jakarta Sans\', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 6vw, 4.5rem)", color: "#F0F0F5", marginBottom: "1.5rem", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "800px", margin: "0 auto 1.5rem"',
         "          You're Already The Expert.")
    ],
}

for filename, patches in files.items():
    filepath = os.path.join(BASE, filename)
    if not os.path.exists(filepath):
        print(f"SKIP (not found): {filename}")
        continue
    content = add_import(filepath)
    for tag, style_snippet, children in patches:
        content, ok = swap_heading(content, tag, style_snippet, children)
        print(f"  {'OK' if ok else 'MISS'}: {filename} — {children.strip()[:40]}")
    with open(filepath, "w") as f:
        f.write(content)

print("\nAll done.")
