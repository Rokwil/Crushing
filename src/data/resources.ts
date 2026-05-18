export interface OfficialResource {
  title: string;
  description: string;
  url: string;
  source: string;
}

export const officialResources: OfficialResource[] = [
  {
    title: "COTO Standard Specifications (DoT)",
    description:
      "Official Committee of Transport Officials page for Standard Specifications for Road and Bridge Works.",
    url: "https://www.transport.gov.za/?page_id=1155",
    source: "Department of Transport",
  },
  {
    title: "SANRAL COTO Downloads",
    description: "Download centre for COTO specification volumes and chapters.",
    url: "https://www.nra.co.za/sanral-downloads/detail/coto-standard-specifications",
    source: "SANRAL",
  },
  {
    title: "COTO Chapter 4 — Materials (PDF)",
    description:
      "Earthworks and Pavement Layers: Materials — source for G1–G9 tables used on this site.",
    url: "https://www.transport.gov.za/wp-content/uploads/2023/02/CHAPTER-4-EARTHWORKS-PAVEMENT-LAYERS-MATERIALS-CDF-Aug-2019.pdf",
    source: "DoT / COTO",
  },
  {
    title: "TMH1 — Standard Methods of Testing",
    description: "Technical methods for ACV, FACT, CBR, Atterberg limits, and related road materials tests.",
    url: "https://www.sabita.co.za/",
    source: "SABITA / industry (search TMH1)",
  },
  {
    title: "TRH14 — Guidelines for Road Construction Materials",
    description:
      "Original G1–G10 classification document (1985). Available via SAICE PDP and publishers.",
    url: "https://saicepdp.org/resources/roads-stormwater-and-transport-guidelines-technical-recommendations-for-highways-saice-pdp",
    source: "SAICE PDP / CSRA TRH series",
  },
  {
    title: "SAPEM — South African Pavement Engineering Manual",
    description:
      "SANRAL pavement manual; Chapter 6 covers investigations, DCP, and TRH14 material class.",
    url: "https://www.nra.co.za/",
    source: "SANRAL (search SAPEM downloads)",
  },
];
