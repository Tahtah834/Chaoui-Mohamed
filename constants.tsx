import React from 'react';
import { SlideData, SlideLayout } from './types';

// Images sourced from Unsplash with specific keywords
const IMAGES = {
  intro: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=1200", // Modern finance graph
  objectives: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1200", // Strategy chess/planning
  scope: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200", // Team planning
  stakeholders: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200", // Handshake
  dataflow: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", // Data analytics screen
  compliance: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200", // Law/Compliance
  skills: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200", // Digital tools
  docs: "https://images.unsplash.com/photo-1661956602820-1282296d9333?auto=format&fit=crop&q=80&w=1200", // Files/Audit
  risk: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200", // Blockchain/Crypto lock (Risk)
  security: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200", // Secure lock digital
  kpi: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200", // Analytics chart
  
  // New images for slides 12-20
  cashpooling: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1200", // Network connections
  banking: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200", // Bank building/Transaction
  cyber: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", // Matrix/Cybersecurity
  funding: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=1200", // Money/Funding
  investment: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=1200", // Growth graph
  forecasting: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", // Spreadsheet focus
  fintech: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200", // Mobile payment/Tech
  crisis: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200", // Storm/Rain (metaphor)
  conclusion: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Corporate skyline
};

export const SLIDES: SlideData[] = [
  // SLIDE 1
  {
    id: 1,
    layout: SlideLayout.TITLE,
    title: "Processus de Gestion de Trésorerie",
    subtitle: "Stratégies d'Optimisation, Contrôle et Sécurisation des Flux Financiers",
    imageUrl: IMAGES.intro,
    footer: "Date: 11/12/2024 | Ref: 3.0 | Direction Financière"
  },
  // SLIDE 2
  {
    id: 2,
    layout: SlideLayout.BULLET_LIST,
    title: "Finalité et Objectifs",
    imageUrl: IMAGES.objectives,
    content: {
      mainPoints: [
        "Assurer la solvabilité immédiate : Garantir la disponibilité des liquidités pour couvrir tous les besoins financiers (exploitation et hors exploitation).",
        "Optimisation des liquidités : Placer les excédents de trésorerie (VMP) pour générer des produits financiers et minimiser les soldes oisifs.",
        "Réduction des coûts financiers : Négocier les conditions bancaires, minimiser les frais d'agios et les commissions de mouvement.",
        "Sécurisation des paiements : Prévenir la fraude (ex: fraude au président) et sécuriser les canaux de transmission (EBICS TS, SWIFT).",
        "Maîtrise du BFR : Piloter le Besoin en Fonds de Roulement pour réduire le cycle d'exploitation et libérer du cash.",
        "Gestion des risques financiers : Couvrir les risques de change et de taux d'intérêt."
      ]
    }
  },
  // SLIDE 3
  {
    id: 3,
    layout: SlideLayout.TWO_COLUMN,
    title: "Domaine d'application et Pilotage",
    imageUrl: IMAGES.scope,
    content: {
      leftColumn: {
        title: "Périmètre Étendu",
        points: [
          "Gestion quotidienne des dates de valeur (J+1, J+2).",
          "Pilotage des flux intra-groupe (Cash Pooling).",
          "Gestion des relations bancaires et négociation des échelles d'intérêts.",
          "Supervision des financements à court, moyen et long terme.",
          "Gestion des devises et opérations de change au comptant/terme."
        ]
      },
      rightColumn: {
        title: "Pilotage et Responsabilités",
        points: [
          "Trésorier Groupe / Directeur Financier (CFO).",
          "Responsabilité de la liquidité et de la solvabilité de l'entreprise.",
          "Interface unique avec les partenaires bancaires.",
          "Garant de l'application de la politique de trésorerie groupe."
        ]
      }
    }
  },
  // SLIDE 4
  {
    id: 4,
    layout: SlideLayout.TWO_COLUMN,
    title: "Parties Prenantes",
    imageUrl: IMAGES.stakeholders,
    content: {
      leftColumn: {
        title: "Interne & Externe",
        points: [
          "Direction Générale : Validation stratégique et arbitrages.",
          "Comptabilité : Rapprochement bancaire et imputation comptable.",
          "Service Achats : Prévisions des décaissements fournisseurs.",
          "Service Commercial : Prévisions des encaissements clients.",
          "Banques : Financements, placements, tenue de comptes.",
          "Commissaires aux comptes : Audit des procédures et des soldes."
        ]
      },
      rightColumn: {
        title: "Attentes des Clients du Processus",
        points: [
          "Fournisseurs : Respect strict des échéances de paiement (LME).",
          "Salariés : Paiement des salaires à date fixe.",
          "Actionnaires : Optimisation du résultat financier et des dividendes.",
          "État / Fisc : Paiement des taxes et impôts (TVA, IS) dans les délais."
        ]
      }
    }
  },
  // SLIDE 5
  {
    id: 5,
    layout: SlideLayout.TWO_COLUMN,
    title: "Flux de Données et Intégration",
    imageUrl: IMAGES.dataflow,
    content: {
      leftColumn: {
        title: "Données d'Entrée (Inputs)",
        points: [
          "Budget de trésorerie annuel mensualisé.",
          "Relevés de comptes (Fichiers AFB120 / MT940).",
          "Factures fournisseurs validées (Bons à payer).",
          "Prévisions de facturation client et carnet de commandes.",
          "Échéanciers d'emprunts et de leasing.",
          "Données de marché (Taux EURIBOR, Cours de change)."
        ]
      },
      rightColumn: {
        title: "Données de Sortie (Outputs)",
        points: [
          "Fiche en date de valeur (Position de trésorerie jour).",
          "Ordres de virement et fichiers de prélèvement (SEPA XML).",
          "Reporting de trésorerie (Réalisé vs Prévisionnel).",
          "Écritures comptables de trésorerie (génération automatique).",
          "Tableaux de bord des conditions bancaires appliquées."
        ]
      }
    }
  },
  // SLIDE 6
  {
    id: 6,
    layout: SlideLayout.TWO_COLUMN,
    title: "Exigences et Conformité",
    imageUrl: IMAGES.compliance,
    content: {
      leftColumn: {
        title: "Exigences Critiques",
        points: [
          "Zéro défaut de paiement : Risque de réputation et d'interdiction bancaire.",
          "Équilibrage quotidien : Éviter les découverts non autorisés coûteux.",
          "Optimisation des frais : Contrôle systématique des échelles d'intérêts et tickets d'agios.",
          "Respect des covenants bancaires (Ratios financiers imposés)."
        ]
      },
      rightColumn: {
        title: "Sources et Réglementation",
        points: [
          "Réglementation SEPA (Single Euro Payments Area).",
          "Normes IFRS (notamment IFRS 9 pour les instruments financiers).",
          "Loi SAPIN II (Lutte contre la corruption et transparence).",
          "Contrats cadres bancaires et conditions générales."
        ]
      }
    }
  },
  // SLIDE 7
  {
    id: 7,
    layout: SlideLayout.TWO_COLUMN,
    title: "Compétences et Outils",
    imageUrl: IMAGES.skills,
    content: {
      leftColumn: {
        title: "Savoir-Faire & Savoir-Être",
        points: [
          "Expertise technique : Cash management, financements, marchés de capitaux.",
          "Maîtrise des outils IT : ERP (SAP, Sage), TMS (Treasury Management System).",
          "Négociation : Capacité à défendre les intérêts de l'entreprise face aux banques.",
          "Rigueur absolue et résistance au stress (gestion de l'urgence).",
          "Anticipation et vision prospective."
        ]
      },
      rightColumn: {
        title: "Environnement Technique",
        points: [
          "Logiciels de Trésorerie (ex: Kyriba, Sage XRT).",
          "Plateformes de communication bancaire (EBICS, SWIFTNet).",
          "Terminaux d'information financière (Bloomberg, Reuters).",
          "Excel (Modélisation avancée, VBA pour les reportings spécifiques)."
        ]
      }
    }
  },
  // SLIDE 8
  {
    id: 8,
    layout: SlideLayout.TWO_COLUMN,
    title: "Information et Documentation",
    imageUrl: IMAGES.docs,
    content: {
      leftColumn: {
        title: "Flux d'Information",
        points: [
          "Reporting hebdomadaire de la position nette de trésorerie.",
          "Analyse des écarts (Variance Analysis) : Réel vs Budget.",
          "Mise à jour dynamique des prévisions glissantes (Rolling Forecast).",
          "Veille économique : Suivi des taux directeurs (BCE, Fed) et tendances macro."
        ]
      },
      rightColumn: {
        title: "Base Documentaire",
        points: [
          "Procédure de gestion de trésorerie (SOP).",
          "Mandats bancaires et pouvoirs bancaires (Signataires autorisés).",
          "Convention de trésorerie (pour le Cash Pooling groupe).",
          "Dossiers de financements et garanties."
        ]
      }
    }
  },
  // SLIDE 9
  {
    id: 9,
    layout: SlideLayout.BULLET_LIST,
    title: "Risques Majeurs",
    imageUrl: IMAGES.risk,
    content: {
      mainPoints: [
        "Risque de liquidité (Illiquidité) : Incapacité à faire face aux échéances à court terme, pouvant mener à la cessation de paiements.",
        "Risque de change : Perte de valeur due à la volatilité des devises sur les opérations import/export.",
        "Risque de taux : Impact de la hausse des taux d'intérêts sur la charge de la dette à taux variable.",
        "Risque de contrepartie : Défaillance d'une banque où sont placés les excédents ou d'un client majeur.",
        "Risque opérationnel : Erreur humaine, panne système, ou cyberattaque (Ransomware).",
        "Risque de fraude : Détournement de fonds, faux virements (FOVI)."
      ]
    }
  },
  // SLIDE 10
  {
    id: 10,
    layout: SlideLayout.BULLET_LIST,
    title: "Mesures Préventives & Contrôle",
    imageUrl: IMAGES.security,
    content: {
      mainPoints: [
        "Planification rigoureuse : Établissement d'un budget de trésorerie et actualisation fréquente.",
        "Couverture des risques (Hedging) : Utilisation de produits dérivés (Swaps, Forwards, Options) pour figer les taux et les changes.",
        "Ségrégation des tâches (SoD) : Séparation stricte entre celui qui saisit et celui qui valide le paiement.",
        "Double signature électronique : Obligatoire pour tout flux sortant significatif.",
        "Diversification bancaire : Ne pas concentrer tous les flux et placements sur une seule banque (limite de contrepartie).",
        "Audit interne : Revue régulière des accès bancaires et des pouvoirs signataires."
      ]
    }
  },
  // SLIDE 11
  {
    id: 11,
    layout: SlideLayout.KPI_TABLE,
    title: "Indicateurs de Performance (KPIs)",
    content: {
      tableData: [
        { label: "Solde Net de Trésorerie", formula: "Disponibilités + VMP - Dettes fi. court terme", frequency: "Quotidien" },
        { label: "DSO (Délai moyen client)", formula: "(Créances clients TTC / CA TTC) x 365", frequency: "Mensuel" },
        { label: "DPO (Délai moyen fournisseur)", formula: "(Dettes fournisseurs TTC / Achats TTC) x 365", frequency: "Mensuel" },
        { label: "Fiabilité des prévisions", formula: "|(Réel - Prévisionnel)| / Réel", frequency: "Hebdomadaire" },
        { label: "Taux d'endettement (Gearing)", formula: "Dettes Nettes / Capitaux Propres", frequency: "Trimestriel" },
        { label: "Coût de la dette", formula: "Charges d'intérêts / Dette moyenne", frequency: "Annuel" },
        { label: "Ratio de liquidité générale", formula: "Actif circulant / Dettes à court terme", frequency: "Mensuel" }
      ]
    }
  },
  // SLIDE 12 - NEW: Cash Pooling
  {
    id: 12,
    layout: SlideLayout.TWO_COLUMN,
    title: "Centralisation de Trésorerie (Cash Pooling)",
    imageUrl: IMAGES.cashpooling,
    content: {
      leftColumn: {
        title: "Principe & Fonctionnement",
        points: [
          "Centralisation automatique des soldes des filiales vers un compte pivot (Master Account).",
          "Nivellement comptable (ZBA - Zero Balance Account) : Remise à zéro quotidienne des comptes secondaires.",
          "Cash Pooling Notionnel : Fusion virtuelle des soldes pour le calcul d'intérêts sans transfert physique de fonds."
        ]
      },
      rightColumn: {
        title: "Avantages Stratégiques",
        points: [
          "Réduction des besoins de financement externes globaux.",
          "Optimisation des produits financiers sur les excédents consolidés.",
          "Meilleure visibilité sur la position globale de cash du groupe.",
          "Simplification de la gestion administrative bancaire."
        ]
      }
    }
  },
  // SLIDE 13 - NEW: Banking Relationships
  {
    id: 13,
    layout: SlideLayout.BULLET_LIST,
    title: "Gestion de la Relation Bancaire",
    imageUrl: IMAGES.banking,
    content: {
      mainPoints: [
        "Sélection des partenaires : Appel d'offres bancaire (RFP) pour optimiser les conditions.",
        "Négociation des conditions : Frais de tenue de compte, commissions de mouvement, dates de valeur, marges sur crédits.",
        "Reporting banque-entreprise : Suivi trimestriel de la 'Facture Bancaire' pour vérifier la conformité aux conditions négociées.",
        "Diversification des risques : Règle de prudence (ex: pas plus de 30% des flux sur une seule banque).",
        "Communication financière : Maintenir la confiance des banquiers par une transparence sur la santé financière."
      ]
    }
  },
  // SLIDE 14 - NEW: Cybersecurity & Fraud
  {
    id: 14,
    layout: SlideLayout.TWO_COLUMN,
    title: "Cybersécurité et Lutte contre la Fraude",
    imageUrl: IMAGES.cyber,
    content: {
      leftColumn: {
        title: "Menaces Actuelles",
        points: [
          "Fraude au Président : Usurpation d'identité d'un dirigeant pour ordonner un virement urgent.",
          "Fraude au changement de RIB (FOVI) : Faux fournisseur demandant un changement de coordonnées bancaires.",
          "Cyberattaques : Ransomware bloquant l'accès aux systèmes comptables et bancaires."
        ]
      },
      rightColumn: {
        title: "Dispositifs de Défense",
        points: [
          "Procédures de contre-appel systématique pour tout changement de RIB.",
          "Utilisation de clés 3SKey (SWIFT) ou certificats numériques forts.",
          "Campagnes de sensibilisation et tests de phishing internes.",
          "Assurance cyber-risques spécifique."
        ]
      }
    }
  },
  // SLIDE 15 - NEW: Financing
  {
    id: 15,
    layout: SlideLayout.TWO_COLUMN,
    title: "Instruments de Financement Court Terme",
    imageUrl: IMAGES.funding,
    content: {
      leftColumn: {
        title: "Financement Bancaire Classique",
        points: [
          "Découvert autorisé : Facilité de caisse pour les besoins ponctuels.",
          "Crédit Spot : Ligne de crédit à taux fixe pour une durée déterminée.",
          "Escompte commercial : Cession d'effets de commerce (traites) à la banque."
        ]
      },
      rightColumn: {
        title: "Financement Mobilisation de Créances",
        points: [
          "Affacturage (Factoring) : Cession des factures clients à un Factor qui avance les fonds.",
          "Cession Dailly : Transfert de créances professionnelles à la banque en garantie d'un crédit.",
          "Reverse Factoring : Financement des fournisseurs initié par le client."
        ]
      }
    }
  },
  // SLIDE 16 - NEW: Investments
  {
    id: 16,
    layout: SlideLayout.BULLET_LIST,
    title: "Stratégie de Placement des Excédents",
    imageUrl: IMAGES.investment,
    content: {
      mainPoints: [
        "Critère de SÉCURITÉ : Priorité absolue à la préservation du capital (Capital garanti).",
        "Critère de LIQUIDITÉ : Disponibilité des fonds en cas de besoin imprévu (Dépôts à terme rompus sans pénalité excessive).",
        "Critère de RENDEMENT : Optimisation de la performance après couverture des deux premiers critères.",
        "Instruments usuels : Comptes à terme (CAT), Certificats de Dépôt Négociables (CDN), SICAV monétaires.",
        "Politique de risque : Interdiction des produits spéculatifs ou volatils pour la trésorerie d'exploitation."
      ]
    }
  },
  // SLIDE 17 - NEW: Forecasting Methods
  {
    id: 17,
    layout: SlideLayout.TWO_COLUMN,
    title: "Méthodologie Prévisionnelle",
    imageUrl: IMAGES.forecasting,
    content: {
      leftColumn: {
        title: "Horizons Temporels",
        points: [
          "Court terme (1-30 jours) : Gestion au jour le jour, équilibrage des comptes.",
          "Moyen terme (1-12 mois) : Budget de trésorerie mensuel, anticipation des besoins de financement saisonniers.",
          "Long terme (1-5 ans) : Plan de financement des investissements (CAPEX)."
        ]
      },
      rightColumn: {
        title: "Techniques de Modélisation",
        points: [
          "Méthode directe : Basée sur les encaissements et décaissements prévus (TTC).",
          "Méthode indirecte : Partir de l'EBITDA et ajuster de la variation du BFR et des CAPEX.",
          "Analyse de sensibilité : Scénarios 'Stress Test' (ex: baisse de 20% du CA)."
        ]
      }
    }
  },
  // SLIDE 18 - NEW: Fintech & Digitalization
  {
    id: 18,
    layout: SlideLayout.BULLET_LIST,
    title: "Digitalisation & Fintech",
    imageUrl: IMAGES.fintech,
    content: {
      mainPoints: [
        "Open Banking (DSP2) : Utilisation d'APIs pour récupérer les relevés bancaires en temps réel sans fichiers lourds.",
        "Instant Payment (Virement Instantané) : Révolutionne la gestion des flux B2B et B2C (fonds disponibles en 10 secondes).",
        "Intelligence Artificielle (IA) : Amélioration des prévisions de trésorerie par l'analyse prédictive des historiques de paiement.",
        "Blockchain : Sécurisation des transactions internationales et Smart Contracts.",
        "RPA (Robotic Process Automation) : Automatisation du lettrage et des rapprochements bancaires."
      ]
    }
  },
  // SLIDE 19 - NEW: Crisis Management
  {
    id: 19,
    layout: SlideLayout.TWO_COLUMN,
    title: "Gestion de Crise de Liquidité",
    imageUrl: IMAGES.crisis,
    content: {
      leftColumn: {
        title: "Signaux d'Alerte",
        points: [
          "Détérioration rapide du DSO (Clients qui ne paient plus).",
          "Refus de crédit par les fournisseurs.",
          "Atteinte des plafonds de découvert bancaire.",
          "Dégradation de la notation financière (Rating)."
        ]
      },
      rightColumn: {
        title: "Plan d'Action d'Urgence",
        points: [
          "Mise en place d'un 'Cash War Room' quotidien.",
          "Gel immédiat des dépenses non essentielles (OPEX/CAPEX).",
          "Négociation de moratoires avec les organismes sociaux et fiscaux.",
          "Mobilisation d'actifs ou cession d'activités non stratégiques."
        ]
      }
    }
  },
  // SLIDE 20 - NEW: Conclusion
  {
    id: 20,
    layout: SlideLayout.TITLE,
    title: "Conclusion & Perspectives",
    subtitle: "La Trésorerie au Cœur de la Stratégie d'Entreprise",
    imageUrl: IMAGES.conclusion,
    footer: "Merci de votre attention | Questions & Réponses"
  }
];