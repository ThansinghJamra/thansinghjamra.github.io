from PIL import Image, ImageDraw, ImageFont

# इमेज का साइज़ सेट करें
width, height = 1080, 1920
bg_color = (255, 255, 255)  # सफेद बैकग्राउंड

# इमेज बनाएं
img = Image.new("RGB", (width, height), bg_color)
draw = ImageDraw.Draw(img)

# टेक्स्ट डालने के लिए डेटा (इसे बाद में Dynamic बना सकते हैं)
question = "भारत का राष्ट्रीय पशु कौन सा है?"
options = ["A. शेर", "B. बाघ", "C. हाथी", "D. गेंडा"]

# फॉन्ट सेट करें (डिफ़ॉल्ट फॉन्ट इस्तेमाल करेंगे)
try:
    font = ImageFont.truetype("arial.ttf", 80)  # Windows के लिए
except:
    font = ImageFont.load_default()

# टेक्स्ट को इमेज में जोड़ें
draw.text((100, 200), question, fill=(0, 0, 0), font=font)

y_offset = 400
for option in options:
    draw.text((100, y_offset), option, fill=(0, 0, 0), font=font)
    y_offset += 150

# फाइल को सेव करें
img.save("quiz_image.jpg")
print("Quiz image generated successfully: quiz_image.jpg")
