const projectData = {
    blinkit: {
        pageTitle: "Daisy Surana | My Impact at Blinkit",
        eyebrow: "Selected work",
        titleHtml: "My Impact <span>at Blinkit</span>",
        lede: "A curated in-house body of work across product storytelling, growth communication, and motion systems that help a fast-moving product stay clear, useful, and expressive.",
        pills: ["Product", "Motion", "Systems"],
        fileId: "BL-2025-01",
        status: "Selected work",
        project: "My Impact at Blinkit",
        role: "Visual & Motion Designer",
        type: "In-house work",
        focus: "Product communication, motion systems, and launch storytelling",
        summary: "A running set of launch moments, product narratives, and visual systems designed to perform under speed while keeping the experience polished.",
        record: "Flagship portfolio file",
        availability: "Detailed walkthrough on request"
    },
    hunch: {
        pageTitle: "Daisy Surana | Hunch Website",
        eyebrow: "Product case study",
        titleHtml: "Hunch <span>Website</span>",
        lede: "A product design case study focused on shaping a clearer web narrative, tightening hierarchy, and building a more intentional bridge between brand expression and product understanding.",
        pills: ["Website", "Narrative", "Product Design"],
        fileId: "HN-2025-02",
        status: "Case study",
        project: "Hunch Website",
        role: "Product Design",
        type: "Website case study",
        focus: "Information structure, visual hierarchy, and narrative clarity",
        summary: "A single product case file reworked to feel more focused, editorial, and easier to scan while preserving the clarity needed for a product story.",
        record: "Product case study folder",
        availability: "Full case narrative on request"
    }
};

const params = new URLSearchParams(window.location.search);
const activeProject = params.get("project") || "blinkit";
const data = projectData[activeProject] || projectData.blinkit;

document.title = data.pageTitle;
document.getElementById("case-eyebrow").textContent = data.eyebrow;
document.getElementById("case-title").innerHTML = data.titleHtml;
document.getElementById("case-lede").textContent = data.lede;
document.getElementById("sheet-id").textContent = data.fileId;
document.getElementById("sheet-status").textContent = data.status;
document.getElementById("sheet-project").textContent = data.project;
document.getElementById("sheet-role").textContent = data.role;
document.getElementById("sheet-type").textContent = data.type;
document.getElementById("sheet-focus").textContent = data.focus;
document.getElementById("sheet-summary").textContent = data.summary;
document.getElementById("sheet-record").textContent = data.record;
document.getElementById("sheet-availability").textContent = data.availability;

const pillContainer = document.getElementById("case-pills");
pillContainer.innerHTML = "";
data.pills.forEach((pill) => {
    const element = document.createElement("span");
    element.textContent = pill;
    pillContainer.appendChild(element);
});
