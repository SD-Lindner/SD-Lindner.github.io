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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-launched-my-new-personal-website-excited-to-share-my-research-on-complex-systems-gender-medicine-and-computational-epidemiology",
          title: '🚀 Launched my new personal website! Excited to share my research on complex...',
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
