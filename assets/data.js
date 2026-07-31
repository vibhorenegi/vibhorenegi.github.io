/* ============================================================
   EDIT YOUR INFORMATION BELOW.
   This one file feeds every page of the site (Home, About,
   Research, Publications, CV, Outreach, Contact). Change
   something here and it updates everywhere it's used.
   ============================================================ */

const NAV = [
  { id: "home",         label: "Home",         href: "index.html" },
  { id: "about",        label: "About",        href: "about.html" },
  { id: "research",     label: "Research",     href: "research.html" },
  { id: "publications", label: "Publications", href: "publications.html" },
  { id: "cv",           label: "CV",           href: "cv.html" },
  { id: "outreach",     label: "Outreach",     href: "outreach.html" },
  { id: "contact",      label: "Contact",      href: "contact.html" }
];

const DATA = {
  name: "Vibhore Negi",
  role: "BOYA Fellow",
  institution: "Kavli Institute for Astronomy and Astrophysics, Peking University",
  location: "Beijing · 39.99 N · 116.31 E",
  photo: "assets/photo.jpeg",   // e.g. "photo.jpg" — put the image file in this same folder. Leave "" for no photo.

  bio: `I am a BOYA Fellow at the Kavli Institute for Astronomy and Astrophysics,
        Peking University, studying the physics and environments of active galactic
        nuclei, and their role in shaping the chemical enrichment in galaxies.`,

  about_text: `I primarily work on understanding the physics and environments
        of active galactic nuclei (AGN), including their structure and kinematics, 
        their role in shaping the galaxy evolution. My path has taken me from a PhD at ARIES,
        India — where I helped commission the 4m International Liquid Mirror
        Telescope (ILMT) — to a Rubin LSST Postdoctoral Fellowship at IUCAA, Pune,
        and now a BOYA Fellowship at Peking University. Along the way I've
        developed a taste for building the data pipelines and simulations that make
        large survey science possible, alongside the observational work itself.
        I'm an active member of several international collaborations and enjoy
        contributing to community tools and training the next generation of
        observers.`,

  interests: [
    "AGN physics & environments",
    "Chemical enrichment in galaxies",
    "AGN feedback & galaxy evolution",
    "Big survey data pipelines",
    "Gravitational lensing"
  ],

  research_text: `My work spans observational and survey-scale extragalactic astrophysics.
        I use optical and NIR photometry and spectroscopy of AGN and galaxies to study their
        environments and evolution, and I build data reduction and analysis pipelines for
        large surveys — including the 4m International Liquid Mirror Telescope (ILMT) and
        simulations for Rubin LSST. I'm a member of the Rubin LSST AGN, Dark Energy, and
        Strong Lensing Science Collaborations, the GAIA Gravitational Lenses (GAIA-GraL)
        collaboration, and a core member of the 4m ILMT team.`,

  news: [
    { date: "2026-06", text: "New paper: \"Astrometric Calibration of the 4-m International Liquid Mirror Telescope observations,\" accepted in PASP." },
    { date: "2026-06", text: "New paper: \"DESI as sparse integral field spectrograph — I: Spatially resolved chemical enrichment in star-forming galaxies at z ≤ 0.1,\" submitted to ApJ." },
    { date: "2026-05", text: "Gave a talk on spatially resolved chemical abundances in local star-forming galaxies at the Asia Pacific Regional IAU Meeting (APRIM), Hong Kong." },
    { date: "2025-06", text: "Gave a talk on Generating mock simulated lensed images for the Rubin LSST at the Rubin Community Workshop, Tucson." },
    { date: "2025-04", text: "Started as BOYA Fellow at the Kavli Institute for Astronomy and Astrophysics, Peking University." },
    { date: "2024-03", text: "Started the IUCAA-funded Rubin LSST Postdoctoral Fellowship at IUCAA, Pune." }
  ],

  publications: [
    { year: "2026", title: "DESI as sparse integral field spectrograph — I: Spatially resolved chemical enrichment in star-forming galaxies at z ≤ 0.1", authors: "Negi, V.; Joshi, R.; Vishnupriya, B.; et al.", venue: "ApJ (submitted)", links: { ads: "#" } },
    { year: "2026", title: "Multi-Object Optical Variability Experiments (MOOVE)", authors: "Negi, V.; Gopal-Krishna; Chand, K.; Chand, H.; Wu, X.; et al.", venue: "ApJ (under revision)", links: { ads: "#" } },
    { year: "2026", title: "Astrometric Calibration of the 4-m International Liquid Mirror Telescope observations", authors: "Negi, V.; Dukiya, N.; Mehra, G.; Ailawadhi, B.; et al.", venue: "PASP, in press", links: { ads: "#" } },
    { year: "2024", title: "Necessity of a TDI optical corrector for ILMT observations", authors: "Negi, V.; Ailawadhi, B.; Akhunov, T.; Borra, E.; et al.", venue: "BSRSL, 93, 863", links: { ads: "#" } },
    { year: "2023", title: "Intranight optical variability of TeV blazars with parsec-scale jets dominated by slow-moving radio knots", authors: "Negi, V.; Gopal-Krishna; Chand, H.; Britzen, S.", venue: "MNRAS Letters, 524L, 66", links: { ads: "#" } },
    { year: "2023", title: "Intranight Optical Variability of blazars and radio-quiet quasars using the ZTF Survey", authors: "Negi, V.; Gopal-Krishna; Joshi, R.; Chand, H.; Wiita, P.; Navaneeth, P. K.; Singh, R. S.", venue: "MNRAS, 522, 5588", links: { ads: "#" } },
    { year: "2023", title: "Probable low frequency quasi-periodic oscillations in blazars from the ZTF survey", authors: "Bannerjee, A.; Negi, V. (corresponding author); Joshi, R.; Kumar, N.; et al.", venue: "MNRAS, 526, 5172", links: { ads: "#" } },
    { year: "2022", title: "Optical flux and colour variability of blazars in the ZTF Survey", authors: "Negi, V.; Joshi, R.; Chand, K.; Chand, H.; Wiita, P.; Ho, L. C.; Singh, R. S.", venue: "MNRAS, 510, 1791", links: { ads: "#" } }
  ],

  cv: {
    positions: [
      { when: "2025 –", what: "BOYA Fellow / KIAA Fellow", where: "Kavli Institute for Astronomy and Astrophysics, Peking University, Beijing" },
      { when: "2024 – 2025", what: "Rubin LSST Postdoctoral Fellow", where: "Inter University Center for Astronomy and Astrophysics (IUCAA), Pune, India" },
      { when: "2023 – 2024", what: "Senior Project Associate", where: "Aryabhatta Research Institute of Observational Sciences (ARIES), Nainital, India" }
    ],
    education: [
      { when: "2017 – 2024", what: "PhD, Extragalactic Astrophysics using the 4m International Liquid Mirror Telescope", where: "Deen Dayal Upadhyaya Gorakhpur University & ARIES, India (Supervisor: Prof. Hum Chand)" },
      { when: "2020", what: "Exchange Student", where: "Université de Liège (ULiège), Belgium" },
      { when: "2015 – 2017", what: "M.Sc., Physics", where: "University of Delhi, India" },
      { when: "2011 – 2014", what: "B.Sc., Physics", where: "University of Delhi, India" }
    ],
    awards: [
      { when: "2025", what: "Foreign Scholars 'Huizhi' Program, Beijing Natural Science Foundation — $30,000" },
      { when: "2025", what: "BOYA Fellowship, Peking University" },
      { when: "2025", what: "KIAA Fellowship, Peking University" },
      { when: "2024", what: "IUCAA-funded Rubin-LSST Postdoctoral Fellowship" },
      { when: "2020", what: "Erasmus+ mobility grant for research, University of Liège — $4,000" },
      { when: "2017", what: "Junior & Senior Research Fellowship, DST, Govt. of India" }
    ],
    talks: [
      { when: "2026-05", what: "Talk: Spatially resolved chemical abundances in local star-forming galaxies", where: "Asia Pacific Regional IAU Meeting (APRIM), Hong Kong" },
      { when: "2025-10", what: "Poster: Results on the astrometric calibration of the 4m ILMT observations", where: "4th BINA Workshop, Trivandrum, India" },
      { when: "2025-07", what: "Talk: Generating mock simulated lensed images for the Rubin LSST", where: "Rubin Community Workshop (online), Tucson, USA" },
      { when: "2023-10", what: "Talk: Blazars' variability on intra-night to year-long timescales using the ZTF survey", where: "MASCA (online), Nice, France" },
      { when: "2023-03", what: "Poster: Astrometric calibration of the 4m ILMT data", where: "3rd BINA Workshop, Nainital, India" },
      { when: "2022-03", what: "Poster: Optical flux and colour variability of blazars in the ZTF survey", where: "ASI Annual Meet, Roorkee, India" },
      { when: "2019-02", what: "Poster: Data reduction pipeline for 4m ILMT", where: "ASI Annual Meet, Bengaluru, India" }
    ]
  },

  research_proposals: [
    { when: "2022", what: "Census on the impact of AGNs in the growth of dwarf galaxies", where: "3.6m DOT (PI) — DOT-2022-C2-P66, DOT-2022-C1-P59" },
    { when: "2021", what: "Characterizing 5 new gravitational lens systems", where: "3.6m DOT (PI) — DOT-2021-C2-P33" },
    { when: "2021", what: "In search of the deflectors of 15 newly identified gravitational lens systems", where: "3.6m DOT (PI) — DOT-2021-C2-P33" },
    { when: "2019", what: "Photometric monitoring of the quadruply lensed quasar PSOJ0147+4630", where: "2m HCT (PI) — HCT-2019-C3-P110" },
    { when: "2022", what: "INOV study of a complete sample of 7 TeV blazars lacking superluminal radio knots", where: "1.3m DFOT (PI) — 2022B-P41, 2022A-P20" },
    { when: "2021", what: "TDI-mode observations using DFOT", where: "1.3m DFOT (PI) — 2021A-P30, 2019B-P16, 2019A-P13" },
    { when: "2018", what: "Multi-Object Variability Experiments (MOVE)", where: "1.3m DFOT (PI) — 2018B-P49" }
  ],

  leadership: [
    { when: "2025 –", what: "Member, AGN Science Collaboration", where: "Rubin LSST Science Collaborations" },
    { when: "2024 –", what: "Member, Dark Energy Science Collaboration (DESC)", where: "Rubin LSST Science Collaborations" },
    { when: "2024 –", what: "Member, Strong Lensing Science Collaboration (SLSC)", where: "Rubin LSST Science Collaborations" },
    { when: "2019 –", what: "Member, GAIA Gravitational Lenses (GAIA-GraL) Collaboration" },
    { when: "2018 –", what: "Core member, 4m International Liquid Mirror Telescope (ILMT) team" }
  ],

  service: [
    { when: "2019-03", what: "Coordinator and Supervisor, ARIES Training School in Observational Astronomy (ATSOA) 2019", where: "ARIES, Nainital" },
    { when: "2022-11", what: "Member, Scientific Organising Committee, Young Astronomers' Meet (YAM) 2022", where: "ARIES, Nainital" }
  ],

  contact: {
    email: "vibhore.negi18@gmail.com",
    "alt. email": "vibhore@pku.edu.cn",
    phone: "+86 13581942601",
    office: "307, KIAA, Peking University, Haidian, Beijing 100871, China"
  },

  links: {
    "ADS": "#",
    "GitHub": "https://github.com/Vibhore-ARIES"
  }
};
