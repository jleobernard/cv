const data = {
    schools: [
        {name: "INSA Rennes", type: "École d'ingénieurs", from: 2004, to: 2009, diploma: "Diplôme d’ingénieur informatique de l’Institut National des sciences appliquées"},
        {name: "Pondicherry University", type: "Université", from: 2008, to: 2009, diploma: "Semestre étude au département informatique"},
        {name: "Lycée Saint Michel des Batignolles", type: "Lycée", from: 2001, to: 2004, diploma: "Baccalauréat série S option Physique-Chimie, Mention bien"},
    ],
    companies: {
        "company_alantaya": {
            name: "Alantaya",
            logo: "wcwc.svg"
        },
        "company_empanaderos": {
            name: "Empanaderos Studios",
            logo: "empanaderos.svg"
        },
        "company_ds": {
            name: "Dassault Systèmes",
            logo: "3ds-dark.svg"
        },
        "company_axway": {
            name: "Axway",
            logo: "Axway_logo.svg"
        },
        "company_sopra": {
            name: "SOPRA",
            logo: "sopra-steria-logo.svg"
        }
    },
    experiences: [
        {
            company: "company_alantaya",
            from: "2016",
            to: "maintenant",
            poste: "TechLead",
            description: "Depuis 2013, Alantaya conçoit des outils nutritionnels pour aider les gens à mieux manger, selon leurs goûts et leurs rythmes de vie. Je me suis intégré à cette start-up, d'abord en freelance dévelopeur puis en interne en tant que techlead afin de les aider à créer un algorithme de suggestion puissant ainsi qu'une plateforme Web flexible et dynamique s'appuyant sur un backend réactif.",
            tasks: [
                {
                    description: "Définition de la stack technologique et de l'architecture applicative",
                    skills: ["skill_rest", "skill_docker", "skill_microservice"]
                },
                {
                    description: "Définition et mise en place des processus de déploiement continu",
                    skills: ["skill_gitlab"]
                },
                {
                    description: "Participation avec le CTO à la défintion des scopes des sprints et répartition de la charge sur les différents membres de l'équipe"
                },
                {
                    description: "Développement des nouvelles fonctionnalités front, back et algorithme",
                    skills: ["skill_algo", "skill_java", "skill_js", "skill_html5", "skill_css3", "skill_ecma6", "skill_react", "skill_angular", "skill_bootstrap", "skill_spring", "skill_springcloud", "skill_hibernate", "skill_kafka", "skill_neo4j", "skill_mysql", "skill_es"]
                },
                {
                    description: "Développement des applications hybrides et déploiement sur les stores Apple et Android",
                    skills: ["skill_cordova", "skill_bash"]
                },
                {
                    description: "Maintenance des serveurs",
                    skills: ["skill_nix", "skill_ovh", "skill_nginx", "skill_apache"]
                },
                {
                    description: "Définition, mise en place et maintenance du monitoring de la plateforme",
                    skills: ["skill_bash", "skill_elk"]
                }
            ]
        },
        {
            company: "company_empanaderos",
            from: "2015",
            to: "2016",
            poste: "Cofondateur & CTO",
            description: "Avec 3 associés basés en Allemagne nous avons créé la société Empanaderos Studios afin de lancer une marketplace innovante mettant en relation les particuliers. En tant que co-fondateur de cette société j'ai participé à l'élaboration de la stratégie de l'entreprise ainsi qu'au développement du site et de l'application mobile associée.",
            tasks: [
                {
                    description: "design de l'architecture applicative",
                    skills: ["skill_rest", "skill_microservice"]
                }, {
                    description: "choix d'infrastructure de nos machines, installation, configuration et sécurisation",
                    skills: ["skill_nix", "skill_ovh", "skill_aws", "skill_bash", "skill_nginx", "skill_docker"]
                }, {
                    description: "développement des composants applicatifs (backend et frontend), déploiement et monitoring",
                    skills: ["skill_gitlab", "skill_java", "skill_spring", "skill_spanish", "skill_neo4j", "skill_js", "skill_es", "skill_algo", "skill_hibernate", "skill_kafka", "skill_algo", "skill_mongo", "skill_php", "skill_html5", "skill_css3", "skill_angular"]
                }, {
                    description: "gestion d'une équipe de 2 développeurs dont je gère les tâches de développement",
                    skills: ["skill_jira"]
                }
            ]
        },
        {
            company: "company_ds",
            from: "2011",
            to: "2015",
            poste: "Développeur Fullstack",
            description: "Intégré à l'équipe 3DPassport j'étais en charge de développer des évolutions et de maintenir une application Web dédiée à la sécurisation des accès et des échanges de la 3DExperience Platform, plateforme sociale d'entreprise développée par Dassault Systèmes. Dans ce contexte j'ai travaillé sur une première version de l'application entièrement écrite en PHP (framework Zend) pour laquelle j'ai développé des connecteurs à différents types de base de données, des fonctionnalités de monitoring et d'audit. J'ai aussi travaillé sur une seconde version de cette application écrite cette fois en Java reprenant les fonctionnalités de la première. Pour cette seconde version j'ai su me placer en tant que TechLead sur toute la partie de développement du back-end où j'ai eu à gérer les développements de 2 collègues juniors.",
            tasks: [
                {
                    description: "Développement des nouvelles fonctionnalités front, back",
                    skills: ["skill_java", "skill_js", "skill_spring", "skill_hibernate", "skill_mongo", "skill_mysql", "skill_php" , "skill_rest", "skill_soap"]
                }, {
                    description: "Déploiement et maintenance des applications sur les clouds AWS et Outscale",
                    skills: ["skill_bash", "skill_aws", "skill_apache"]
                }, {
                    description: "Définition, mise en place et maintenance du monitoring de la plateforme",
                    skills: ["skill_bash", "skill_nix"]
                }
            ]
        },
        {
            company: "company_axway",
            from: "2010",
            to: "2011",
            poste: "Consultant Java / PHP",
            description: "Intégration des applications développées par Axway (filiale du groupe SOPRA Group) à des systèmes d’information bancaires.",
            tasks: [
                {
                    description: "Développement de connecteurs entre les SIs des clients et des solutions proposées par Axway",
                    skills: ["skill_java", "skill_php", "skill_soap", "skill_spring", "skill_mysql"]
                }
            ]
        },
        {
            company: "company_sopra",
            from: "2009",
            to: "2010",
            poste: "Consultant Java",
            description: "C'est au sein de cette SSII que j'ai trouvé mon premier emploi en tant que dévelopeur Junior. Au département \'Service publique\' j'ai pu participer à différents projets de la CNAMTS, que ce soit de nouveaux projets ou bien des projets à refondre et d'autres à maintenir",
            tasks: [
                {
                    description: "Développement d’applications Web pour la CNAMTS destinées à être utilisées par les agents de la CNAM à travers toute la France.",
                    skills: ["skill_java", "skill_php", "skill_spring", "skill_mysql"]
                }
            ]
        }
    ],
    skills: [
        {id: "skill_french", name: "Français", type: "language", grade: 5, comment: "langue maternelle"},
        {id: "skill_english", name: "Anglais", type: "language", grade: 5, comment: "courant (975 TOEIC)"},
        {id: "skill_spanish", name: "Espagnol", type: "language", grade: 4, comment: "courant (capacité de travail)"},
        {id: "skill_portuguese", name: "Portugais", type: "language", grade: 4, comment: "courant (capacité de travail)"},
        {id: "skill_swedish", name: "Suédois", type: "language", grade: 4, comment: "courant (capacité de travail)"},
        {id: "skill_chinese", name: "Chinois", type: "language", grade: 3, comment: "débutant (HSK3)"},
        {id: "skill_italian", name: "Italien", type: "language", grade: 3, comment: "Intermédiaire"},
        {id: "skill_german", name: "Allemand", type: "language", grade: 2, comment: "Débutant"},


        {id: "skill_java", name: "Java", type: "itlanguage", grade: 5, favorite: true},
        {id: "skill_python", name: "Python", type: "itlanguage", grade: 3},
        {id: "skill_js", name: "Javascript", type: "itlanguage", grade: 5},
        {id: "skill_ecma6", name: "ECMAScript 6", type: "itlanguage", grade: 5, favorite: true},
        {id: "skill_php", name: "PHP", type: "itlanguage", grade: 5},
        {id: "skill_bash", name: "Bash", type: "itlanguage", grade: 3},
        {id: "skill_html5", name: "HTML5", type: "itlanguage", grade: 5},
        {id: "skill_css3", name: "CSS3", type: "itlanguage", grade: 5},

        {id: "skill_rest", name: "REST", type: "conventions", grade: 5},
        {id: "skill_soap", name: "SOAP", type: "conventions", grade: 3},
        {id: "skill_microservice", name: "μServices", type: "conventions", grade: 4},

        {id: "skill_angular", name: "Angular 1.5 et >= 2", type: "front", grade: 5, favorite: true},
        {id: "skill_bootstrap", name: "Bootstrap", type: "front", grade: 5},
        {id: "skill_react", name: "React", type: "front", grade: 3},
        {id: "skill_cordova", name: "Cordova", type: "front", grade: 3},

        {id: "skill_spring", name: "Spring 4 (Core, MVC, Data, Security, AOP)", type: "back", grade: 5, favorite: true},
        {id: "skill_springcloud", name: "Spring Cloud (1.3)", type: "back", grade: 4},
        {id: "skill_hibernate", name: "Hibernate", type: "back", grade: 4},
        {id: "skill_kafka", name: "Kafka", type: "back", grade: 4, favorite: true},
        {id: "skill_elk", name: "Stack ELK", type: "back", grade: 4},
        {id: "skill_nginx", name: "Nginx", type: "back", grade: 4},
        {id: "skill_apache", name: "Apache server", type: "back", grade: 3},

        {id: "skill_neo4j", name: "Neo4J", type: "db", grade: 5, favorite: true},
        {id: "skill_mysql", name: "MySQL", type: "db", grade: 5},
        {id: "skill_es", name: "Elasticsearch", type: "db", grade: 4},
        {id: "skill_mongo", name: "MongoDB", type: "db", grade: 3},

        {id: "skill_nix", name: "Administration de serveurs Redhat et Ubuntu", type: "ope", grade: 4},
        {id: "skill_ovh", name: "Déploiement sur OVH", type: "ope", grade: 4},
        {id: "skill_aws", name: "Déploiement sur AWS", type: "ope", grade: 3},
        {id: "skill_gitlab", name: "Gitlab / GitlabCI", type: "ope", grade: 4},
        {id: "skill_jenkins", name: "Jenkins", type: "ope", grade: 3},
        {id: "skill_docker", name: "Docker", type: "ope", grade: 4, favorite: true},
        {id: "skill_jira", name: "Jira", type: "ope", grade: 3}

    ]
}


export default data
