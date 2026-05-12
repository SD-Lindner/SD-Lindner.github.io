// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects spanning complex systems, computational epidemiology, and gender medicine.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-how-opinions-drive-the-formation-of-social-groups",
        
          title: "How opinions drive the formation of social groups",
        
        description: "An interactive animation of the spin-glass self-assembly model from our PRL paper on homophily-based group formation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/spin-glass-groups/";
          
        },
      },{id: "post-revisiting-gender-socioeconomics-and-hypertension-comorbidities",
        
          title: "Revisiting gender, socioeconomics, and hypertension comorbidities",
        
        description: "A new interactive bipartite network visualization of how gender-related socioeconomic factors associate with chronic disease comorbidities in people with hypertension.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hypertension-gender-network/";
          
        },
      },{id: "news-launched-my-new-personal-website-excited-to-share-my-research-here",
          title: 'Launched my new personal website! Excited to share my research here.',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-phd-thesis-statistical-network-approach-to-identify-gender-related-factors-and-interactions-in-chronic-diseases-at-the-medical-university-of-vienna",
          title: 'Successfully defended my PhD thesis — Statistical network approach to identify gender-related factors...',
          description: "",
          section: "News",},{id: "news-new-preprint-out-care-trajectories-are-linked-to-mental-health-and-mortality-in-cancer-patients-we-use-dynamic-time-warping-and-hierarchical-clustering-to-analyze-longitudinal-care-patterns-in-over-8-000-haematologic-malignancy-patients",
          title: 'New preprint out: Care Trajectories Are Linked to Mental Health and Mortality in...',
          description: "",
          section: "News",},{id: "news-new-blog-post-built-an-interactive-monte-carlo-animation-for-jan-korbel-et-al-s-spin-glass-group-formation-model-prl-2023-on-which-i-m-a-co-author-drag-the-temperature-slider-to-watch-opinion-clusters-form-and-dissolve",
          title: 'New blog post: built an interactive Monte Carlo animation for Jan Korbel et...',
          description: "",
          section: "News",},{id: "projects-patient-visit-trajectories",
          title: 'Patient Visit Trajectories',
          description: "Using visit trajectory analysis to identify patient subgroups with distinct survival patterns",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cancer_trajectory_analysis/";
            },},{id: "projects-controversiality-in-online-conversations",
          title: 'Controversiality in Online Conversations',
          description: "A multi-method analysis of ideological polarization and thread dynamics on DerStandard",
          section: "Projects",handler: () => {
              window.location.href = "/projects/derstandard_controversy_analysis/";
            },},{id: "projects-federated-analysis-for-health-data",
          title: 'Federated Analysis for Health Data',
          description: "Privacy-preserving distributed analytics enabling international health research without sharing sensitive patient data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/federated_analysis/";
            },},{id: "projects-sex-and-gender-in-health-outcomes",
          title: 'Sex and Gender in Health Outcomes',
          description: "Integrating biological sex and socio-cultural gender dimensions into chronic disease research across international cohorts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gender_medicine_research/";
            },},{id: "projects-computational-legal-linguistics",
          title: 'Computational Legal Linguistics',
          description: "Quantifying strategic shifts in legal discourse through linguistic networks and LLM adoption analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/legal_linguistics_analysis/";
            },},{id: "projects-master-scuba-diver",
          title: 'Master Scuba Diver',
          description: "Exploring underwater worlds",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scuba_diving/";
            },},{id: "projects-homophily-based-social-group-formation",
          title: 'Homophily-Based Social Group Formation',
          description: "A spin glass self-assembly framework for understanding how opinions drive the emergence of social groups",
          section: "Projects",handler: () => {
              window.location.href = "/projects/social_group_formation/";
            },},{id: "projects-wastewater-based-epidemiology",
          title: 'Wastewater-Based Epidemiology',
          description: "Estimating unreported SARS-CoV-2 infections using wastewater surveillance data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wastewater_based_epidemiology/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%6E%64%6E%65%72.%73%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1795-6143", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=v0lgPK0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
