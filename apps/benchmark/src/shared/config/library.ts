/** Bundled sample spines, served from /public/library. Each entry lists the
 *  files that make up the bundle (skeleton + atlas + texture). */
export interface LibraryItem {
  id: string;
  name: string;
  note: string;
  files: string[];
}

export const LIBRARY_BASE = "/library/";

export const LIBRARY: LibraryItem[] = [
  {
    id: "spineboy",
    name: "Spineboy",
    note: "The classic - 67 bones, 11 animations",
    files: ["spineboy.json", "spineboy.atlas", "spineboy.png"],
  },
  {
    id: "high-1",
    name: "Hero · high 1",
    note: "High-detail skin variant",
    files: ["high_1.json", "high.atlas", "high.webp"],
  },
  {
    id: "high-2",
    name: "Hero · high 2",
    note: "High-detail skin variant",
    files: ["high_2.json", "high.atlas", "high.webp"],
  },
  {
    id: "low-1",
    name: "Hero · low 1",
    note: "Low-detail skin variant",
    files: ["low_1.json", "low.atlas", "low.webp"],
  },
  {
    id: "low-2",
    name: "Hero · low 2",
    note: "Low-detail skin variant",
    files: ["low_2.json", "low.atlas", "low.webp"],
  },
];
