/* =========================
   SIMPLE EQUIPMENT SEARCH
   ========================= */

const equipmentList = [
    {
        name: "Medical Bed",
        page: "medical-beds.html",
        keywords: ["bed", "hospital bed", "medical bed", "patient bed"]
    },
    {
        name: "Delivery Bed",
        page: "delivery-beds.html",
        keywords: ["delivery bed", "maternity bed", "labour bed", "ob bed"]
    },
    {
        name: "Weighing Scale",
        page: "scales.html",
        keywords: ["scale", "weighing scale", "medical scale", "weight"]
    },
    {
        name: "BMI Scale",
        page: "bmi-scales.html",
        keywords: ["bmi", "bmi scale", "body mass index"]
    },
    {
        name: "Pulse Oximeter",
        page: "pulse-oximeters.html",
        keywords: ["pulse oximeter", "spo2", "oxygen saturation"]
    },
    {
        name: "Patient Monitors",
        page: "patient-monitors.html",
        keywords: ["patient monitor", "vital signs", "monitor", "icu monitor"]
    },
    {
        name: "Medical Stool",
        page: "stools.html",
        keywords: ["stool", "medical stool", "doctor stool", "nurse stool"]
    },
    {
        name: "Autoclave",
        page: "autoclaves.html",
        keywords: ["autoclave", "sterilizer", "steam sterilizer"]
    },
    {
        name: "Oxygen Concentrator",
        page: "oxygen.html",
        keywords: ["oxygen concentrator", "oxygen machine", "oxygen"]
    },
    {
        name: "Equipment Repair & Maintenance",
        page: "support-services.html",
        keywords: ["repair", "maintenance", "servicing", "installation"]
    }
    {
        name: "Infusion Pump",
        page: "infusion-pumps.html",
        keywords: ["infusion pump", "iv pump", "syringe pump"]
    }

];

/* =========================
   SEARCH FUNCTION
   ========================= */

function handleSearch() {
    const input = document.getElementById("siteSearch");
    if (!input) return;

    const query = input.value.trim().toLowerCase();
    if (query === "") return;

    // Find matching equipment
    const result = equipmentList.find(item =>
        item.keywords.some(keyword => query.includes(keyword))
    );

    if (result) {
        window.location.href = result.page;
    } else {
        alert(
            "No results found.\nTry searching for equipment like beds, monitors, oxygen, or repairs."
        );
    }
}

/* =========================
   ENTER KEY SUPPORT
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("siteSearch");

    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                handleSearch();
            }
        });
    }
});
