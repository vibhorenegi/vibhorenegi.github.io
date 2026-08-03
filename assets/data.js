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
  { id: "outside",      label: "Outside Research", href: "outside-research.html" },
  { id: "contact",      label: "Contact",      href: "contact.html" }
];

const DATA = {
  name: "Vibhore Negi",
  role: "BOYA Fellow",
  institution: "Kavli Institute for Astronomy and Astrophysics, Peking University",
  location: "Beijing · 39.99 N · 116.31 E",
  photo: "assets/photos/photo.jpeg",   // e.g. "photo.jpg" — put the image file in this same folder. Leave "" for no photo.

  bio: `Studying the engines at galactic centers, and the imprint they leave on galaxy evolution`,

  about_text: `I am a BOYA Fellow at the Kavli Institute for Astronomy and Astrophysics,
        Peking University. I received my PhD from ARIES, India, in 2024, focussing on variability of 
        active galactic nuclei on diverse timescales, along with highly contributing to the commissioning 
        of the 4-m International Liquid Mirror Telescope (ILMT).
        
        
        Coming from an observatory background, I have hands-on expertise with ground-based
        telescopes and observational data analysis. More recently, though, my work has
        shifted toward leveraging archival datasets from large surveys.


        I primarily work on understanding the physics and environments
        of active galactic nuclei (AGN) — their structure and kinematics, and
        their role in shaping galaxy evolution. Observationally, I use optical
        and NIR photometry and spectroscopy to study AGN and their host
        environments, drawing on large datasets from next-generation surveys
        like DESI, ZTF, and Gaia.


        Day to day, most of my work is code. I develop data reduction and
        analysis pipelines in Python, using tools like IRAF, DAOPHOT,
        SExtractor, GALFIT, and TOPCAT for photometric and spectroscopic
        calibration, source extraction, and astrometry. For the 4m
        International Liquid Mirror Telescope (ILMT), I've worked on
        astrometric calibration and transient-detection pipelines for its
        scanning-mode (TDI) survey data. I also build simulations and mock
        datasets — including generating simulated lensed quasar images for
        Rubin LSST.`,

  outside_text: `
  I grew up in Almora in the Indian Himalayas, a few years in Delhi for my bachelor's and master's degrees, 
  did my PhD in Nainital, a year in Pune, and I'm now in Beijing — a fair few skies along the 
  way. Outside of work, I play cricket and table tennis, watch movies (and probably too much YouTube), 
  and frequently enjoy wandering, without much of a plan.`,

  photos: [
    { src: "assets/photos/skiing.jpeg", caption: "First time on skis" },
    { src: "assets/photos/greatwall.jpeg", caption: "Standing on a couple thousand years of history" },
    { src: "assets/photos/hector.jpeg", caption: "Hector, under my supervision" },
    { src: "assets/photos/snow.jpeg", caption: "Observing runs, winter edition" },
    { src: "assets/photos/paragliding.JPG", caption: "Tandem paragliding" },
    { src: "assets/photos/tabletennis.jpeg", caption: "1-0, vs. the net" },

  ],
  
 
  interests: [
    "AGN physics & environments",
    "Chemical enrichment in galaxies",
    "AGN feedback & galaxy evolution",
    "Big survey data pipelines",
    "Gravitational lensing"
  ],

  journey: [
    { place: "Almora", note: "Where I grew up" },
    { place: "Delhi", note: "BSc & MSc" },
    { place: "Nainital", note: "PhD, ARIES" },
    { place: "Pune", note: "Rubin LSST Fellow, IUCAA" },
    { place: "Beijing", note: "BOYA Fellow, PKU" }
  ],

        
research_text: `My research interests are fairly diverse, but center primarily on active galactic nuclei 
and their role in galaxy evolution — approached through a mix of survey-scale archival 
data, observational photometry and spectroscopy, and the pipelines that make sense of both.`,



  research_areas: [
    {
      title: "DESI as sparse IFU: chemical enrichment in galaxies and AGN",
      text: `Dedicated integral field spectrographs are expensive and rare, but a multi-fiber survey 
      like DESI can approximate one when several fibers happen to land across a single nearby, extended 
      galaxy. I've been exploiting the high multiplexing of the DESI survey - treating its fiber placements as 
      a sparse IFU — to recover spatially resolved chemical abundance measurements without needing 
      dedicated IFU time. Applied to a sample of local star-forming galaxies at z ≤ 0.1, this lets us map how metallicity 
      varies across a galaxy's disk and test what that gradient says about how the galaxy assembled its gas and 
      stars over time. Because it piggybacks on existing DESI data rather than requiring new observations, 
      the approach scales to far more galaxies than traditional IFU surveys ever could. This is the basis 
      of my recent paper currently under review at ApJ.`
    },
    {
      title: "AGN variability on diverse timescales",
      text: `Much of my early work focused on intranight optical variability (INOV) — brightness 
      changes in AGN and blazars over just hours — as a probe of what's physically driving the 
      emission close to the black hole. Using ground-based monitoring at the Devasthal Optical 
      Telescope alongside large time-domain surveys like ZTF, I've studied how variability behavior 
      differs between blazars with fast-moving versus slow-moving radio jets, and between jet-dominated 
      blazars and radio-quiet quasars where the disk itself likely drives the variability. This included 
      population-level duty-cycle statistics rather than single-target monitoring, which let us test trends 
      across dozens of sources at once instead of one at a time. One strand of this work also turned up 
      tentative low-frequency quasi-periodic oscillations in blazar light curves, hinting at underlying 
      periodic structure in the emission. Together, these results help separate variability driven by 
      relativistic jets from variability driven by accretion-disk instabilities across timescales from 
      minutes to years.`
    },
    {
      title: "ILMT astrometry pipeline & project contributions",
      text: `The 4-m International Liquid Mirror Telescope is a fixed, zenith-pointing telescope that scans a
       single strip of sky with a one day cadence, which is unlike how conventional pointed telescopes operate.
        Since my PhD, I have been a part of the core team that commissioned ILMT and led the development of its 
        astrometric calibration pipeline that maps the detector pixels to sky coordinates specifically for 
        its drift-scan (TDI) observing mode. Beyond astrometric calibration, I contributed to 
       photometric and transient-detection pipelines that flag variable and transient sources as ILMT's nightly strip of sky 
       comes in. Having been involved from construction through early science operations, I've seen this telescope 
       go from commissioning to a regular survey mode telescope.`
    },
    {
      title: "Gravitational lensing",
      text: `I'm part of the GAIA Gravitational Lenses (GAIA-GraL) collaboration, which uses Gaia's astrometry and 
      multi-band photometry to flag candidate gravitationally lensed quasars — systems where a foreground galaxy 
      splits the light from a background quasar into multiple images. As PI on several observing proposals, I've 
      followed up these candidates with spectroscopy and imaging to confirm which are real lenses, and to 
      characterize the deflector galaxies responsible for the lensing. More recently, with the LSST Strong Lensing Science 
      Collaboration, I've been generating mock simulated lensed images for Rubin LSST, using tools like SIMCT to help the community 
      prepare for the much larger population of lenses that survey is expected to discover, while also developing 
      advanced machine learning techniques to extract them.`
    }
  ],

  news: [
    { date: "2026-06", text: "New paper: \"Astrometric Calibration of the 4-m International Liquid Mirror Telescope observations,\" accepted in PASP." },
    { date: "2026-06", text: "New paper: \"DESI as sparse integral field spectrograph — I: Spatially resolved chemical enrichment in star-forming galaxies at z ≤ 0.1,\" submitted to ApJ." },
    { date: "2026-05", text: "Gave a talk on spatially resolved chemical abundances in local star-forming galaxies at the Asia Pacific Regional IAU Meeting (APRIM), Hong Kong." },
    { date: "2025-09", text: "Awarded the Foreign Scholars 'Huizhi' Program grant worth $30,000 by the Beijing Natural Science Foundation." },
    { date: "2025-06", text: "Gave a talk on Generating mock simulated lensed images for the Rubin LSST at the Rubin Community Workshop, Tucson." },
    { date: "2025-04", text: "Started as BOYA Fellow at the Kavli Institute for Astronomy and Astrophysics, Peking University." }
  ],

  publications: [
    { year: "2026", title: "DESI as sparse integral field spectrograph — I: Spatially resolved chemical enrichment in star-forming galaxies at z ≤ 0.1", authors: "Negi, V.; Joshi, R.; Vishnupriya, B.; et al.", venue: "ApJ (submitted)", links: { ads: "https://ui.adsabs.harvard.edu/abs/2026arXiv260612541N/abstract" } },
    { year: "2026", title: "Multi-Object Optical Variability Experiments (MOOVE)", authors: "Negi, V.; Gopal-Krishna; Chand, K.; Chand, H.; Wu, X.; et al.", venue: "ApJ (under revision)", links: { ads: "#" } },
    { year: "2026", title: "Astrometric Calibration of the 4-m International Liquid Mirror Telescope observations", authors: "Negi, V.; Dukiya, N.; Mehra, G.; Ailawadhi, B.; et al.", venue: "PASP, 138g4506N", links: { ads: "https://ui.adsabs.harvard.edu/abs/2026PASP..138g4506N/abstract" } },
    { year: "2024", title: "Necessity of a TDI optical corrector for ILMT observations", authors: "Negi, V.; Ailawadhi, B.; Akhunov, T.; Borra, E.; et al.", venue: "BSRSL, 93, 863", links: { ads: "https://ui.adsabs.harvard.edu/abs/2024BSRSL..93..863N/abstract" } },
    { year: "2023", title: "Intranight optical variability of TeV blazars with parsec-scale jets dominated by slow-moving radio knots", authors: "Negi, V.; Gopal-Krishna; Chand, H.; Britzen, S.", venue: "MNRAS Letters, 524L, 66", links: { ads: "https://ui.adsabs.harvard.edu/abs/2023MNRAS.524L..66N/abstract" } },
    { year: "2023", title: "Intranight Optical Variability of blazars and radio-quiet quasars using the ZTF Survey", authors: "Negi, V.; Gopal-Krishna; Joshi, R.; Chand, H.; Wiita, P.; Navaneeth, P. K.; Singh, R. S.", venue: "MNRAS, 522, 5588", links: { ads: "https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.5588N/abstract" } },
    { year: "2023", title: "Probable low frequency quasi-periodic oscillations in blazars from the ZTF survey", authors: "Bannerjee, A.; Negi, V. (corresponding author); Joshi, R.; Kumar, N.; et al.", venue: "MNRAS, 526, 5172", links: { ads: "https://ui.adsabs.harvard.edu/abs/2023MNRAS.526.5172B/abstract" } },
    { year: "2022", title: "Optical flux and colour variability of blazars in the ZTF Survey", authors: "Negi, V.; Joshi, R.; Chand, K.; Chand, H.; Wiita, P.; Ho, L. C.; Singh, R. S.", venue: "MNRAS, 510, 1791", links: { ads: "https://ui.adsabs.harvard.edu/abs/2022MNRAS.510.1791N/abstract" } }
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
    ],
    service: [
      { when: "2019-03", what: "Coordinator and Supervisor, ARIES Training School in Observational Astronomy (ATSOA) 2019", where: "ARIES, Nainital" },
      { when: "2022-11", what: "Member, Scientific Organising Committee, Young Astronomers' Meet (YAM) 2022", where: "ARIES, Nainital" }
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

  contact: {
    email: "vibhore.negi18@gmail.com",
    "alt. email": "vibhore@pku.edu.cn",
    phone: "+86 13581942601",
    office: "307, KIAA, Peking University, Haidian, Beijing 100871, China"
  },

  links: {
    "ADS": "https://ui.adsabs.harvard.edu/user/libraries/SBEx_gRGRsaRAcDC9Bhpzw",
    "GitHub": "https://github.com/vibhorenegi"
  }
};