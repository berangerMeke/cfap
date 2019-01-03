var app = angular.module('gaeaApp', ['pascalprecht.translate']);

app.config(function($translateProvider) {
  $translateProvider
   
 ////////////////* VERSION ANGLAISE *////////////////
    .translations('en', {
    HEADLINE: 'Hello there, This is my awesome app!',
    INTRO_TEXT: 'And it has i18n support!',
    
    /***************** LA NAVBAR *****************/ 
      
    statique_title:'University of Douala',  
    statique_title2:'Faculty of science',  
     
    message:'The activities related to the closing of the school year 2016 - 2017 at the Complexe Scolaire LA RELIANCE EDUCATIVE will take place on 03 June 2017',  
      
    langue: 'langue',
    
    /*MENU */
    home: 'HOME',
       institution: 'SCHOOLING',
      /*sous menu-institution*/
            preinscription:'preregistration',
            school_project:'Administrative registration',
            educatif_project:'Accademic registration',
	 recherche: 'RESEARCH',
      /*sous menu-institution*/
            recherche1:'Doctoral Training Unit',
            recherche2:'Research Laboratory',
            recherche3:'Research Team',
            recherche4:'Theses & HDR supported',
            recherche5:'Publications',
            recherche6:'Doctoral registration / PhD',
     school: 'DEPARTEMENT',
            /*sous menu-school*/
            langue:'Biology',
                anglais:'Biology of plant organisms',
                francais:'Biology of animal organisms',
                italien:'Italien',
                allemand:'Allemand',
            informatique_menu:'Mathematics & Computer Science',
                omo:'Mathematics',
                ts:'Informatique',
            info:'Geosciences',
            professionnelle:'Physical',
            association:'Chemistry',
    admission: 'SUIVI POST-FORMATION',
                    reglement_interieur:'Règlement intérieur',
    contact: 'CONTACT',
    
    /************** FIN DE LA NAVBAR ****************/  
    
   
     
	  /************** DEBUT DU HOME SLIDE ****************/
        big_text_slide1:'FACULTY OF SCIENCE',
        smallTextSlide1:'University of Douala',
      
        big_text_slide2:'computer',
        small_text_slide2:'Lab...',
      
        big_text_slide3:'laboratories',
        small_text_slide3:'Chemistry - Biochemistry - Biology - Geoscience',
	  
	  	big_text_slide4:'Development',
        small_text_slide4:'Mathematics - Physics',
	  
	  	big_text_slide5:'Etudiands',
        small_text_slide5:'in amphitheater',
	  
	  	big_text_slide6:'Etudiandes',
        small_text_slide6:'in front of the barbillard',
    /************** FIN DU HOME SLIDE ****************/  
	  
	  
	  
	  
	  
	  
	  
      
    /************** DEBUT PAGE  ACCUEIL  ******************/
     
      presentation:'Presentation',
      centre_formation:'BILINGUAL SCHOOL COMPLEX',
      complexe_scolaire_minus:'Faculty of science',
      
      initiation:'Theoretical and practical introduction to computer science',
      reussite_epanouissement_mérite:'Success, fulfillment, merit, listening, are part of our keywords.',
      compose_le:'COMPOSE THE',
      pour_nous_joindre:'TO JOIN US',
      
      texte1:'Welcome to',
      texte2:'Located in Douala-Cameroon, in the district of Douala 4th (Bonabéri) by "Quatre étages" at the place called "Barrière Washington".',
      
      texte3:'University of Douala (UD) is located mainly at CAMPUS II in NDOGBONG next to ENSET and I.U.T. This campus is home to the Deanship, classrooms, laboratories and a theater amphitheater with 100 seats. The Faculty also has an amphitheater on campus I at ESSEC in front of the gymnasium. It also benefits from a few premises at the former Rectorate in Akwa which are home to',
      
      texte4:'CEPAMOQ (Center for Molecular Atomic Physics and Quantum Optics). It is also worth mentioning several classrooms and two 500-seat amphitheatres that the Faculty of Sciences shares with the other faculties of the University of Douala at the "Extension" campus in NDOGBONG. The academic year is divided into two (2) semesters each comprising fourteen (14) and sixteen (16) weeks of teaching and assessment.',
      texte5:'Numerous recreational activities are proposed to create a pleasant and friendly climate, as well as a good balance of life.',
      
      texte6:'Essential values to learn better and which are the keys to success for further education. the',
    texte7:'The pupil is at the center of our pedagogy. Grace to a personalized follow-up, the student is listened to, guided, oriented and better understands his objectives.',  
    
      texte8:'If you are looking for a private school for your child to learn in the best conditions, in the city of Douala and in particular Bonabéri, please call us at 675 68 67 26/697 80 50 36/677 32 28 71.',
      
      apprendre_grandir:'Campus activities ...',
      
      salle_cours:'Mastering science ... owning the world',
      enfant_precoce_text:'A child with high potential is more than an IQ. It is in particular, a different intellectual functioning and hypersensitivity exacerbated.',
      
      enseignement_bilingue:'IT, an asset of the present and the future ...',
      enseignement_bilingue_text:'Grace to active pedagogy, from the nursery school to the class 6, children learn English and French with pleasure, supervised by certified and native teachers.',
      
      informatique:'Computer science at the heart of education',
      informatique_text:'ICT is today a major and unavoidable axis of development for all nations. LA RELIANCE EDUCATIVE School Complex places them at the heart of its educational system.',
      
      text_image_accueil_bas1:'PUPILS IN COMPUTER LAB',
      text_image_accueil_bas2:'PUPILS IN CLASSROOM',
      text_image_accueil_bas3:'PUPILS IN BREAK',
 
      evenement_a_venir:'Available departments',
      
      evenement_a_venir_date1:'JUNE 2017',
      evenement_a_venir_text1:'ACTIVITIES',
      evenement_a_venir_text1_2:'End-of-school activities',
      evenement_a_venir_date1_2:'On 03 June 2017',
      
      evenement_a_venir_date2:'JUNE 2017',
      evenement_a_venir_text2:'EXAMINATION',
      evenement_a_venir_text2_2:'Written examination by the CEP',
      evenement_a_venir_date2_2:'Le ... Juin 2017',
      
      evenement_a_venir_date3:'JUIN 2017',
      evenement_a_venir_text3:'EXAMINATION',
      evenement_a_venir_text3_2:'Written examination by the FSLC',
      evenement_a_venir_date3_2:'Le ... Juin 2017',
      
     /************** FIN PAGE  ACCUEIL  ******************/
      
      
      
      
      
      /************* DEBUT PAGE  RESULTAT AUX EXAMEN  ******************/
        cinq_premier:'The five first of each class for the 5th sequence',
        result_exam:'Official exam results',
      
        classes1:'CLASS 1',
        classes2:'CLASS 2',
        classes3:'CLASS 3',
        classes4:'CLASS 4',
        classes5:'CLASS 5',
        classes6:'CLASS 6',
        
        rang:'Rank',
        nomPrenon:'Last name and first name',
      
        rang1:'1st',
        rang2:'2nd',
        rang3:'3rd',
        rang4:'4th',
        rang5:'5th',
      
        nos_laureats:'Our official examination laureates',
        admis_aux_exam:'Admitted to',
      
        pourcentage:'Percentages of Success in Official Examinations',
      
      /************** FIN PAGE  RESULTAT AUX EXAMEN  ******************/
      
      
      
      
       /************** DEBUT PAGE  PROJET D'ECOLE  ******************/
      projet_ecole:'School Project',
      
      projet_ecole_text1:'Cameroonian schools are subject to the provisions of the Education Code. They must develop a settlement project that identifies specific modalities for the implementation of national objectives and programs.',
      
      titre_projet_ecole_text2:'THE OBJECTIVES AND ISSUES OF A SCHOOL PROJECT',
      projet_ecole_text2_1:'The school\'s project is a',
      projet_ecole_text2_2_gras:'instrument of piloting',
      projet_ecole_text2_3:'the ambition of which is to',
      projet_ecole_text2_4_gras:'more coherence:',
      projet_ecole_text2_5:'coherence within the institution, between the different actors through a',
      projet_ecole_text2_6_gras:'Respectful approach of their identity and values.',
      projet_ecole_text2_7:'Coherence between the institution and its environment, by',
      projet_ecole_text2_8_gras:'association with the conception of the institution\'s policy', 
      projet_ecole_text2_9:'families, elected officials and the institution.',
      projet_ecole_text2_10:'Coherence at the national level between the institutions of the network,',
      projet_ecole_text2_11_gras:'by the definition of objectives common to all,',
      projet_ecole_text2_12:'but which everyone can and must pursue in their own way, by innovating, inventing',
      
      titre_projet_ecole_text3:'THE INSTITUTIONAL FRAMEWORK',
      projet_ecole_text3_1_gras:'The school project should be formulated to fit into the new framework of the Strategic Orientation Plan and its objectives.',
      projet_ecole_text3_2:'The current project presented in this bulletin takes account of:',
      projet_ecole_text3_3:'of the objectives and indicators of performance of the mission primary and nursery school education',
      projet_ecole_text3_4:'of the school\'s diagnosis presented to the mission.',
      projet_ecole_text3_5:'It allows:',
      projet_ecole_text3_6:'To contribute to the achievement of the objectives of the draft strategic orientation of basic education,',
      projet_ecole_text3_7:'D’exprimer une volonté locale,',
      projet_ecole_text3_8:'To express a local will,',
      projet_ecole_text3_9:'To give coherence to activities,',
      projet_ecole_text3_10:'To express the expectations, the hopes and the collective will of a community,',
      projet_ecole_text3_11:'To update and clarify the shared values, and produce a common identity,',
      projet_ecole_text3_12:'To lead to a definition of objectives and a stable strategy open to the environment.',
      
      titre_projet_ecole_text4:'THE AXES OF PROGRESS AND DEVELOPMENT OF THE SCHOOL PROJECT',
      projet_ecole_text4_1:'Six axes of progress for the development of the school were defined and agreed by a steering group and validated by the school council',
      projet_ecole_axe_1:'Axis 1',
      projet_ecole_axe_1_text1_gras:'Valorize the brand image of the establishment by improving its attractiveness and striving for excellence.',
      projet_ecole_axe_1_text2:'This axis aims to:',
      projet_ecole_axe_1_text3:'Modernize and adapt the reception conditions for pupils and families',
      projet_ecole_axe_1_text4:'To offer students a course of excellence that guarantees success for all',
      projet_ecole_axe_1_text5:'Structuring and rationalizing the provision of training through the introduction of diversified options,',
      projet_ecole_axe_1_text6:'Encourage the participation of pupils of the school in different types of national and / or international competitions,',
      projet_ecole_axe_1_text7:'To develop and organize activities for cultural and sporting purposes,',
      projet_ecole_axe_2:'Axis 2',
      projet_ecole_axe_2_text1_gras:'Conduct the maximum number of pupils at the level of the skills expected at the end of schooling and at obtaining the corresponding diplomas.',
      projet_ecole_axe_2_text2:'This axis aims to:',
      projet_ecole_axe_2_text3:'Preventing learning difficulties and take charge of academic difficulty,',
      projet_ecole_axe_2_text4:'Accompany each pupil in the acquisition of the common core of competences for all his compulsory schooling,',
      projet_ecole_axe_2_text5:'Improve mastery of science and technology,',
      projet_ecole_axe_2_text6:'To ensure the success of each pupil through the personalization of the courses,',
      projet_ecole_axe_2_text7:'Improve success rates in the',
      projet_ecole_axe_2_text8_cep:'FSLC and GCE,',
      projet_ecole_axe_2_text10:'Preparing for secondary education, autonomy and adult life,',
      projet_ecole_axe_3:'Axis 3',
      projet_ecole_axe_3_text1_gras:'Continue and develop the language policy already under way in nursery to Class 6',
      projet_ecole_axe_3_text2:'This axis aims to:',
      projet_ecole_axe_3_text3:'Strengthening language teaching and offering all pupils a suitable language course,',
      projet_ecole_axe_3_text4:'Increase the proportion of pupils in the classroom with enhanced language,',
      projet_ecole_axe_4:'Axis 4',
      projet_ecole_axe_4_text1_gras:'Developing educational and cultural partnerships to enable the school to spread and open across the national territory.',
      projet_ecole_axe_4_text2:'This axis aims to:',
      projet_ecole_axe_4_text3:'Consolidate partnership and exchanges with the Cameroon Institute,',
      projet_ecole_axe_4_text4:'Strengthen our mission of cooperation,',
      projet_ecole_axe_4_text5:'Promote the exchange and development of inter-school educational projects,',
      projet_ecole_axe_5:'Axis 5',
      projet_ecole_axe_5_text1_gras:'Improve the professional competence of non-teaching and non-teaching staff (local contracts) through in-service training, both internally and externally.',
      projet_ecole_axe_5_text2:'This axis aims to:',
      projet_ecole_axe_5_text3:'Strengthen continuing education,',
      projet_ecole_axe_5_text4:'Having the potential of qualified teachers,',
      projet_ecole_axe_5_text5:'To constitute and make available a library of educational resources,',
      
       projet_ecole_axe_6:'Axis 6',
      projet_ecole_axe_6_text1_gras:'Pupils Life',
      projet_ecole_axe_6_text2:'This axis aims to:',
      projet_ecole_axe_6_text3:'Enforcing respect for the school and promoting accountability,',
      projet_ecole_axe_6_text4:'Contributing to the improvement of pupils\' quality of life,',
      projet_ecole_axe_6_text5:'Improve the functioning of school life,',
      projet_ecole_axe_6_text6:'Ensure pupils follow-up in collaboration with faculty, principal and families.',
      projet_ecole_axe_6_text7:'To ensure the educational animation and participate in the learning of the practices of the citizens.',
      /************** FIN PAGE  PROJET D'ECOLE  ******************/
      
      
      
      
       /************** DEBUT PAGE  MATERNELLE  ******************/
      maternelle:'Nursery',
      maternelle_titre:'Bilingual private nursery school',
      
      maternelle_text1:'It is not necessary to be bilingual to integrate',
      maternelle_text2_gras:'bilingual private nursery school',
      maternelle_text3:'Just want to become one.',
      
      maternelle_text4:'Children are welcomed from 2 years in reduced numbers (18 per class approx.).',
      maternelle_text5:'Educational supervision includes: a principal, high-level bilingual teachers, and qualified nursery assistants.',
      maternelle_text6:'Educational supervision includes: a principal, high-level bilingual teachers, and qualified nursery assistants',
      
      maternelle_text2_1:'The method of',
      maternelle_text2_2:'for nursery ',
      maternelle_text2_3:'Daily practice of English with a native English teacher and workbooks in English from the Little Section.',
      maternelle_text2_4:'Initiation from nursery to reading and writing with the syllabic method, guaranteeing an excellent spelling',
      maternelle_text2_5:'Our goal: to promote early learning, concentration and development of the child.',
      maternelle_text2_6:'Grace to the limited staff, there are many activities: ',
      maternelle_text2_7:'- Oral activities: French, English, singing ',
      maternelle_text2_8:'- Motor activity activities: plastic art workshops, physical education, body expression classes ',
      maternelle_text2_9:'- Cultural and recreational activities: educational games, sensory discoveries.',
      
      maternelle_journee_type:'Typical Day',
      maternelle_journee_type1:'- Start of the day at 8am to respect the biological rhythm of the child (welcome possible from 07:30) ',
      maternelle_journee_type2:'- Fun application exercises to awaken their curiosity',
      maternelle_journee_type3:'- nap for small',
      
      maternelle_horaire:'schedule',
      maternelle_horaire1:'Home: from 7:30 am',
      maternelle_horaire2:'School: Monday, Tuesday, Wednesday, Thursday and Friday from 08:00 to 12:30 ',
      maternelle_horaire3:'Lunch + recreation: from 10h00 to 10h30',
      maternelle_horaire4:'Educational nursery',
      maternelle_horaire5:'from 10:30 to 12:30',
      
       /************** FIN PAGE  MATERNELLE  ******************/
      
      
      
      
       /************** DEBUT PAGE  PRIMAIRE  ******************/
        primaire:'Primary',
        primaire_titre:'The Bilingual Primary Complex',
      
        primaire_text1_gras:'Le Complexe Primaire Bilingue',
        primaire_text2:', Proposes a bilingual education (Francophone Section - Anglophone Section) in elementary classes. The classical methods of schooling allow pupils to flourish and continue their education in the best schools, in Cameroon and abroad.',
        primaire_text3:'It is not necessary to be bilingual to integrate',
        primaire_text4:'bilingual private primary school',
        primaire_text5:'just want to become one.',
        primaire_text6:'Important pedagogical support: a director, high-level bilingual teachers, educational assistants and supervisors. ',
        primaire_text7:'Teachers supervise all recreations and departures at the end of the day. ',
      
        primaire_text2_1:'Back to basics',
        primaire_text2_2:'Transmit the pleasure of learning and rigor.',
        primaire_text2_3:'Education is delivered in accordance with the official programs of Basic Education in Cameroon and goes very often beyond.',
        primaire_text2_4:'A use of the syllabic method, which guarantees excellent spelling and a good understanding of the texts',
        primaire_text2_5:'Listening and accompaniment by teachers involved.',
        primaire_text2_6:'Successful children trained in the best ways of working.',
      
        primaire_journee_type:'Typical day in our private primary school',
        primaire_journee_type1:'Beginning of the day at 7:30 am to respect the biological rhythm of the child (reception possible until 07:15).',
        primaire_journee_type2:'Work modules last about 40 minutes corresponding to the attention span of the young child.',
        primaire_journee_type3:'Exercises of application and repetition for a good assimilation.',
      
        primaire_horaire:'Private primary school hours',
        primaire_horaire1:'School: Monday, Tuesday, Thursday and Friday from 07:30 to 15:30;',
        primaire_horaire2:'Wednesday',
        primaire_horaire3:'From 7:30 to 12:30.',
      
       /************** FIN PAGE  PRIMAIRE  ******************/
      
      
      
      
       /************** DEBUT CALENDRIER ANNEE SCOLAIRE ******************/
      
      calendrier_titre:'School calendar of the year 2016 - 2017',
      calendrier_text:'LA RELIANCE EDUCATIVE school complex follows the official school calendar of basic education in Cameroon.',
      
      calendrier_periode:'Period',
      calendrier_periode1:'Back to School',
      calendrier_periode2:'Christmas holidays',
      calendrier_periode3:'Easter holidays',
      calendrier_periode4:'Summer holidays',
      
      calendrier_debut:'beginning',
      calendrier_debut1:'(At 3:30 pm)',
      calendrier_debut2_rentree_scolaire:'Monday, September 05, 2016 at 7:30 am',
      calendrier_debut3:'Friday, December 23, 2016',
      calendrier_debut4:'Friday, March 31, 2017 at 3:30 pm',
      calendrier_debut_gde_vacances:'Friday, July 28, 2017 at 15:30 min',
      
      calendrier_reprise:'Reprise',
      calendrier_reprise1:'(At 7.30 am)',
      calendrier_reprise2:'Monday 09 January 2017',
      calendrier_reprise3:'Monday, April 17, 2017 at 7:30 am',
      
       /************** FIN CALENDRIER  ********************/
      
      
      
      
       /************** DEBUT PAGE CONTACT  ********************/
      
       contact_titre:'Contact',
      
       contact_localisation1:'Location',
       contact_localisation2:'Douala - Cameroun',
       contact_localisation2:'Bonabéri (by "Quatres étages" at the place called "Barrière Washington")',
      
       contact_boite_postale:'Post box',
       contact_boite_postale1:'BP :',
       contact_boite_postale2:'Douala - Cameroun',
      
       contact_telephone:'Phone',
       contact_telephone1:'675 68 67 26',
       contact_telephone2:'697 80 50 36',
       contact_telephone3:'677 32 28 71',
      
       contact_email:'E-mail',
       contact_email1:'mail@gmail.com',
      
       contact_formulaire_titre:'Contact Us',
       contact_formulaire_nom:'Your name',
       contact_formulaire_tel:'Your Phone',
       contact_formulaire_email:'Your email',
       contact_formulaire_message:'Your message',
       contact_formulaire_bouton_envoyer:'Send',
      
       /************** FIN PAGE CONTACT  ********************/
      
      
      
      
      
       /************** DEBUT PAGE ACTIVITÉ EXTRA-SCOLAIRE  ********************/
      
      activite_extra_scolaire_titre:'Extra-curricular activities',
      activite_extra_scolaire_text:'Celebration of World Oral Health Day at LA RELIANCE EDUCATIVE school complex.',
      activite_extra_scolaire_nos_plus:'Our more',
      
       /************** FIN PAGE ACTIVITÉ EXTRA-SCOLAIR  ********************/
      
      
      
      
      
      /************** DEBUT DEVELOPPEUR  ********************/ 
        dev1:'Develop by',
        dev2:'All Rights Reserved',
       /************** FIN DEVELOPPEUR  ********************/
      
   
  })
  
  
  
  
  
  
  
  
  
  
  
  
 ////////////////* VERSION FRANÇAISE *//////////////// 
  .translations('fr', {
    HEADLINE: 'Salut, voici une de mes applications!',
    INTRO_TEXT: 'Et il supporte i18n!',
    
  /******************* LA NAVBAR ******************/  
      
    statique_title:'Université de Douala',  
    statique_title2:'Faculté des sciences',  
    
    message:'Les activités relatives à la cloture de l\'année scolaire 2016 - 2017 au Complexe Scolaire LA RELIANCE EDUCATIVE auront lieu le 03 Juin 2017',  
      
    langue: 'language',
      
    /*MENU */
    home: 'ACCUEIL',
    institution: 'SCOLARITE',
      /*sous menu-institution*/
            preinscription:'Préinscription',
            school_project:'Inscription administrative',
            educatif_project:'Inscription accadémique',
	 recherche: 'RECHERCHE',
      /*sous menu-institution*/
            recherche1:'Unité de Formation Doctorale',
            recherche2:'Laboratoire de Recherche',
            recherche3:'Equipe de Recherche',
            recherche4:'Thèses & HDR soutenues',
            recherche5:'Publications',
            recherche6:'Inscription Doctoral / PhD',
     school: 'DEPARTEMENT',
            /*sous menu-school*/
            langue:'Biologie',
                anglais:'Biologie des organismes végétaux',
                francais:'Biologie des organismes animaux',
                italien:'Italien',
                allemand:'Allemand',
            informatique_menu:'Mathématiques & Informatique',
                omo:'Mathématiques',
                ts:'Informatique',
            info:'Géosciences',
            professionnelle:'Physique',
            association:'Chimie',
    admission: 'SUIVI POST-FORMATION',
                    reglement_interieur:'Règlement intérieur',
    contact: 'CONTACT',   
     
    /************** FIN DE LA NAVBAR *****************/ 
      
      
      
      
      /************** DEBUT DU HOME SLIDE ****************/
        big_text_slide1:'FACUlTE DES SCIENCES',
        smallTextSlide1:'Université de Douala',
      
        big_text_slide2:'Salle',
        small_text_slide2:'Informatique...',
      
        big_text_slide3:'Laboratoires',
        small_text_slide3:'Chimie - Biochimie - Biologie - Géoscience',
	  
	  	big_text_slide4:'Dévéloppement',
        small_text_slide4:'Mathématiques - Physiques',
	  
	  	big_text_slide5:'Etudiands',
        small_text_slide5:'a l\'amphitheatre',
	  
	  	big_text_slide6:'Etudiandes',
        small_text_slide6:'Face au barbillard',
    /************** FIN DU HOME SLIDE ****************/ 
      
      
      
      
     /************** DEBUT PAGE  ACCUEIL  ******************/
     
      presentation:'Présentation',
      complexe_scolaire_minus:'La faculté des Sciences (FS)',
      
      texte3:' de l’Université de Douala (UD) est située pour l’essentiel au CAMPUS II à NDOGBONG à côté de l’ENSET et de l’I.U.T. Ce campus abrite le Décanat, les salles de cours, les laboratoires et un amphi théâtre de 100 places. La Faculté dispose aussi d’un amphithéâtre au campus I à l’ESSEC en face du gymnase. Elle bénéficie par ailleurs de quelques locaux à l’ancien Rectorat à Akwa qui abritent notamment',
      
      texte4:'le CEPAMOQ (Centre de Physique Atomique Moléculaire et Optique Quantique). Il convient également de signaler plusieurs salles de cours et de deux amphithéâtres de 500 places que la Faculté des Sciences partage avec les autres Facultés de l’Université de Douala au campus « Extension » à NDOGBONG. L’année académique est repartie en deux (2) semestres comprenant chacun entre quatorze (14) et seize (16) semaines d’enseignement et d’évaluation.',
      
     /* texte6:'Des valeurs essentielles pour apprendre mieux et qui sont les clés de la réussite pour la poursuite des études. Au',
    texte7:'l’élève est au centre de notre pédagogie. Grâce à un suivi personnalisé, l\'élève est écouté, guidé, orienté et comprend mieux ses objectifs.',  
    
      texte8:'Si vous recherchez pour votre enfant un établissement privé d’enseignement où il pourra apprendre dans les meilleures conditions, dans la ville de Douala et notamment à Bonabéri, n\'hésitez pas à nous appeler au 675 68 67 26 / 697 80 50 36 / 677 32 28 71.',*/
      
      apprendre_grandir:'Activités au campus...',
      
      salle_cours:'Maîtriser la science... Posséder le monde',
      enfant_precoce_text:'Un enfant à haut potentiel ne se résume pas à un QI. C’est notamment, un fonctionnement intellectuel différent et une hypersensibilité exacerbés.',
      
      enseignement_bilingue:'L\'informatique, un atout du présent et du futur...',
      enseignement_bilingue_text:'Grâce à une pédagogie active, de la petite section de maternelle au , les enfants apprennent l’anglais et le français avec plaisir, encadrés par des enseignants certifiés et natifs.',
      
      informatique:'L\'informatique au coeur de l\'éducation',
      informatique_text:'Les TIC constituent aujourd\'hui un axe majeur et incontournable de développement pour toutes les nations. Le Complexe Scolaire LA RELIANCE EDUCATIVE les placent au coeur de son système éducatif.',
      
      text_image_accueil_bas1:'APPRENANTS EN COURS DE LANGUE',
      text_image_accueil_bas2:'APPRENANTS EN COURS D\'INFORMATIQUE',
      text_image_accueil_bas3:'SOUTENANCE',
 
      evenement_a_venir:'Les départements disponibles',
      
      evenement_a_venir_date1:'JUIN 2017',
      evenement_a_venir_text1:'Spécial vacances',
      evenement_a_venir_text1_2:'Début de cours promo vacances',
      evenement_a_venir_date1_2:'Le ... Juin 2017',
      
      evenement_a_venir_date2:'JUIN 2017',
      evenement_a_venir_text2:'Début de la prochaine session',
      evenement_a_venir_text2_2:'cours d\'anglais',
      evenement_a_venir_date2_2:'Le ... Juin 2017',
      
      evenement_a_venir_date3:'JUIN 2017',
      evenement_a_venir_text3:'Soutenances',
      evenement_a_venir_text3_2:'Anglais & Informatique',
      evenement_a_venir_date3_2:'Le ... Juin 2017',
      
      /************** FIN PAGE  ACCUEIL  ******************/
      
      
      
      
      /************* DEBUT PAGE  RESULTAT AUX EXAMEN  ******************/
        cinq_premier:'Les Cinq prémiers de chaque classe pour la 5ème séquence',
        result_exam:'Résultats aux examens officiels',
      
        classes1:'SIL',
        classes2:'CP',
        classes3:'CE1',
        classes4:'CE2',
        classes5:'CM1',
        classes6:'CM2',
        
        rang:'Rang',
        nomPrenon:'Nom et Prénom',
      
        rang1:'1er',
        rang2:'2ème',
        rang3:'3ème',
        rang4:'4ème',
        rang5:'5ème',
      
        nos_laureats:'Nos lauréats aux examens officiels',
        admis_aux_exam:'Admis au',
      
        pourcentage:'Pourcentages de Réussite aux examens officiels',
      
      /************** FIN PAGE  RESULTAT AUX EXAMEN  ******************/
      
      
      
      
     /************** DEBUT PAGE  PROJET D'ECOLE  ******************/
      projet_ecole:'Projet de l\'école',
      
      projet_ecole_text1:'Les établissements scolaires camerounais sont soumis au respect des dispositions prévues par le code de l’éducation. Ils doivent élaborer un projet d’établissement qui définit les modalités particulières de mise en œuvre des objectifs et des programmes nationaux.',
      
      titre_projet_ecole_text2:'LES OBJECTIFS ET ENJEUX D’UN PROJET D’ECOLE',
      projet_ecole_text2_1:'Le projet de l\'école est un',
      projet_ecole_text2_2_gras:'instrument de pilotage',
      projet_ecole_text2_3:'dont l’ambition est d’aboutir à',
      projet_ecole_text2_4_gras:'davantage de cohérence :',
      projet_ecole_text2_5:'Cohérence à l’intérieur de l’établissement, entre les différents acteurs par une',
      projet_ecole_text2_6_gras:'démarche respectueuse de leur identité et de leurs valeurs .',
      projet_ecole_text2_7:'Cohérence entre l’établissement et son environnement, par',
      projet_ecole_text2_8_gras:'l’association à la conception de la politique de l’établissement', 
      projet_ecole_text2_9:'des familles, des élus, de l’institution.',
      projet_ecole_text2_10:'Cohérence aux niveaux national entre les établissements du réseau,',
      projet_ecole_text2_11_gras:'par la définition d’objectifs commun à tous,',
      projet_ecole_text2_12:'mais que chacun peut et doit poursuivre à sa manière, en innovant, en inventant.',
      
      titre_projet_ecole_text3:'LE CADRE INSTITUTIONNEL',
      projet_ecole_text3_1_gras:'Le projet de l\'école devra être reformulé pour s’inscrire dans le nouveau cadre du Plan d’Orientation Stratégique et de ses objectifs.',
      projet_ecole_text3_2:'L\’actuel projet présenté dans ce bulletin de rentrée tient compte :',
      projet_ecole_text3_3:'des objectifs et indicateurs de performance de la mission enseignement scolaire primaire et maternel',
      projet_ecole_text3_4:'du diagnostic de l\'école présenté à la mission.',
      projet_ecole_text3_5:'Il permet :',
      projet_ecole_text3_6:'D\’apporter sa contribution à la réalisation des objectifs du projet d’orientation stratégique de l\'enseignement de base,',
      projet_ecole_text3_7:'D’exprimer une volonté locale,',
      projet_ecole_text3_8:'De définir une stratégie,',
      projet_ecole_text3_9:'De donner une cohérence aux activités,',
      projet_ecole_text3_10:'D’exprimer les attentes, les espoirs et la volonté collective d’une communauté,',
      projet_ecole_text3_11:'De mettre à jour et de clarifier les valeurs partagées, et de produire une identité commune,',
      projet_ecole_text3_12:'De déboucher sur une définition d’objectifs et sur une stratégie stable ouverte sur l’environnement.',
      
      titre_projet_ecole_text4:'LES AXES DE PROGRES ET DE DEVELOPPEMENT DU PROJET DE l\'ÉCOLE',
      projet_ecole_text4_1:'Six axes de progrès au service du développement de l’école ont été définis et arrêtés par un groupe de pilotage et validés par le conseil de l\'école',
      projet_ecole_axe_1:'Axe n° 1',
      projet_ecole_axe_1_text1_gras:'Valoriser l’image de marque de l’établissement en améliorant son attractivité et tendre vers l’excellence.',
      projet_ecole_axe_1_text2:'Cet axe vise à :',
      projet_ecole_axe_1_text3:'Moderniser et adapter les conditions d’accueil des élèves et des familles,',
      projet_ecole_axe_1_text4:'Offrir aux élèves un enseignement d’excellence garantissant la réussite pour tous,',
      projet_ecole_axe_1_text5:'Structurer et rationnaliser l’offre de formation par la mise en place d’options diversifiées,',
      projet_ecole_axe_1_text6:'Encourager la participation des élèves de l’établissement à différents types de concours nationaux et/ou internationaux,',
      projet_ecole_axe_1_text7:'Développer et organiser des actions à vocations culturelles et sportives,',
      projet_ecole_axe_2:'Axe n° 2',
      projet_ecole_axe_2_text1_gras:'Conduire le maximum d’élèves au niveau des compétences attendues en fin de scolarité et à l’obtention des diplômes correspondants.',
      projet_ecole_axe_2_text2:'Cet axe vise à :',
      projet_ecole_axe_2_text3:'Prévenir les difficultés d’apprentissage et prendre en charge la difficulté scolaire,',
      projet_ecole_axe_2_text4:'Accompagner chaque élève dans l’acquisition du socle commun de compétences pour toute sa scolarité obligatoire,',
      projet_ecole_axe_2_text5:'Améliorer la maîtrise des sciences et des technologies,',
      projet_ecole_axe_2_text6:'Assurer la réussite de chaque élève grâce à la personnalisation des parcours,',
      projet_ecole_axe_2_text7:'Améliorer les taux de réussite au',
      projet_ecole_axe_2_text8_cep:'CEP et au concours d\'entrée en 6ème,',
      projet_ecole_axe_2_text10:'Préparer à l’enseignement secondaire, à l’autonomie et à la vie d’adulte,',
      projet_ecole_axe_3:'Axe n° 3',
      projet_ecole_axe_3_text1_gras:' Poursuivre et développer la politique des langues déjà engagée dans l’établissement de la maternelle au CM2.',
      projet_ecole_axe_3_text2:'Cet axe vise à :',
      projet_ecole_axe_3_text3:' Renforcer l’enseignement des langues et offrir à tous les élèves un parcours linguistique adapté,',
      projet_ecole_axe_3_text4:' Augmenter la proportion d’élèves en classe à dispositif de langue renforcée,',
      projet_ecole_axe_4:'Axe n° 4',
      projet_ecole_axe_4_text1_gras:' Développer les partenariats éducatifs et culturels pour permettre à l’établissement de rayonner et de s’ouvrir sur l\'ensemble du territoire national.',
      projet_ecole_axe_4_text2:'Cet axe vise à :',
      projet_ecole_axe_4_text3:'Consolider le partenariat et les échanges avec l’Institut du Cameroun,',
      projet_ecole_axe_4_text4:'Renforcer notre mission de coopération,',
      projet_ecole_axe_4_text5:'Favoriser les échanges et le développement de projets pédagogiques inter-établissements scolaires,',
      projet_ecole_axe_5:'Axe n° 5',
      projet_ecole_axe_5_text1_gras:' Améliorer les compétences professionnelles des personnels enseignants et non enseignants titulaires ou non titulaires (contrats locaux) par la mise en place d’actions de formation continue à l’interne, comme à l’externe.',
      projet_ecole_axe_5_text2:'Cet axe vise à :',
      projet_ecole_axe_5_text3:'Renforcer la formation continue,',
      projet_ecole_axe_5_text4:'Disposer d’un potentiel d’enseignants qualitativement adaptés,',
      projet_ecole_axe_5_text5:'Constituer et mettre à disposition une banque de ressources documentaires à vocation pédagogique,',
      
       projet_ecole_axe_6:'Axe n° 6',
      projet_ecole_axe_6_text1_gras:'Vie de l’élève',
      projet_ecole_axe_6_text2:'Cet axe vise à :',
      projet_ecole_axe_6_text3:'Faire respecter l’école et favoriser l’apprentissage de la responsabilité,',
      projet_ecole_axe_6_text4:'Contribuer à l’amélioration de la qualité de vie des élèves,',
      projet_ecole_axe_6_text5:'Améliorer le fonctionnement de la vie scolaire,',
      projet_ecole_axe_6_text6:'Assurer le suivi des élèves en collaboration avec le personnel enseignant, le directeur et les familles.',
      projet_ecole_axe_6_text7:'Assurer l’animation éducative et participer à l’apprentissage des pratiques citoyennes.',
     
      /************** FIN PAGE  PROJET D'ECOLE  ******************/
      
      
      
      
       /************** DEBUT PAGE  ANGLAIS  ******************/
      titre_anglais1:'Formation linguistique',
      titre_anglais2:'BIOLOGIE DES ORGANISMES VEGETAUX',
      titre_anglais3:'Élèves, Étudiants, Entreprises... Grand public',
      maternelle_titre:'La langue anglaise, je dois absolument la',
      
      maternelle_text1:'Il n\'est pas nécessaire d\'être bilingue pour apprendre la langue anglaise ou de la perfectionner au',
      maternelle_text2_gras:'',
      maternelle_text3:'Il suffit d\'avoir envie de le devenir.',
      
      maternelle_text4:'Les enfants sont accueillis dès 2 ans en effectifs réduits (18 par classe env.).',
      maternelle_text5:'L’encadrement pédagogique comprend : une directrice, des enseignants bilingues de haut niveau, et des assistantes maternelles qualifiées.',
      maternelle_text6:'Surveillance et sécurité : les enseignants supervisent toutes les récréations, les repas des enfants pendant les récréations et la garderie.',
      
      maternelle_text2_1:'La Méthode de',
      maternelle_text2_2:'pour la maternelle',
      maternelle_text2_3:'Pratique quotidienne de l’anglais avec un professeur d\'anglais natif et des cahiers d’activité en anglais dès la Petite Section.',
      maternelle_text2_4:'Initiation dès la maternelle à la lecture et à l’écriture avec la méthode syllabique, garante d’une excellente orthographe.',
      maternelle_text2_5:'Notre objectif : favoriser les apprentissages précoces, la concentration et l’épanouissement de l’enfant.',
      maternelle_text2_6:'Grâce aux effectifs limités, les activités sont nombreuses : ',
      maternelle_text2_7:'- Activités orales : français, anglais, chant ',
      maternelle_text2_8:'- Activités de motricité : ateliers d’arts plastiques, éducation physique, cours d’expression corporelle ',
      maternelle_text2_9:'- Activités culturelles et ludiques : jeux éducatifs, découvertes sensorielles.',
      
      maternelle_journee_type:'Journée type',
      maternelle_journee_type1:'- Début de la journée à 8h pour respecter le rythme biologique de l’enfant (accueil possible dès 07h30) ',
      maternelle_journee_type2:'- Exercices d’application ludiques pour éveiller leur curiosité',
      maternelle_journee_type3:'- Sieste pour les petits',
      
      maternelle_horaire:'Horaires',
      maternelle_horaire1:'Accueil : à partir de 07h30 ',
      maternelle_horaire2:'Ecole :lundi, mardi, mercredi, jeudi et vendredi, de 08h00 à 12h30 ',
      maternelle_horaire3:'Déjeuner + récréation : de 10h00 à 10h30 ',
      maternelle_horaire4:'Garderie éducative :',
      maternelle_horaire5:'de 10h30 à 12h30',
      
       /************** FIN PAGE  MATERNELLE  ******************/
      
      
      
      
       /************** DEBUT PAGE  PRIMAIRE  ******************/
        primaire:'Primaire',
        primaire_titre:'Le Complexe Primaire Bilingue',
      
        primaire_text1_gras:'Le Complexe Primaire Bilingue',
        primaire_text2:', propose en primaire un enseignement bilingue (Section francophone – Section anglophone) dans des classes à petits effectifs. Les méthodes classiques de l’école permettent aux élèves de s’épanouir et de poursuivre leur scolarité dans les meilleurs établissements, au Cameroun comme à l’étranger.',
        primaire_text3:'Il n\'est pas nécessaire d\'être bilingue pour intégrer l\'',
        primaire_text4:'école primaire privée bilingue',
        primaire_text5:'Il suffit d\'avoir envie de le devenir.',
        primaire_text6:'Un encadrement pédagogique important : un directeur, des enseignants bilingues de haut niveau, des assistantes d’éducation et des surveillants. ',
        primaire_text7:'Les enseignants supervisent toutes les récréations et les départs des enfants en fin de journée de classe. ',
      
        primaire_text2_1:'Retour aux fondamentaux',
        primaire_text2_2:'Transmettre le plaisir d’apprendre et la rigueur.',
        primaire_text2_3:'L’enseignement est dispensé dans le respect des programmes officiels de l’Education de Base au Cameroun et va très souvent au-delà.',
        primaire_text2_4:'Une utilisation de la méthode syllabique , qui garantit une excellente orthographe et une très bonne compréhension des textes',
        primaire_text2_5:'Une écoute et un accompagnement par des enseignants impliqués.',
        primaire_text2_6:'Des enfants épanouis et formés aux meilleures méthodes de travail.',
      
        primaire_journee_type:'Journée type dans notre école primaire privée',
        primaire_journee_type1:'Début de la journée à 7h30 pour respecter le rythme biologique de l’enfant (accueil possible jusqu\'a 07h15).',
        primaire_journee_type2:'Modules de travail d’une durée de 40 minutes environ correspondant à la capacité d’attention du jeune enfant.',
        primaire_journee_type3:'Exercices d’application et de répétition pour une bonne assimilation',
      
        primaire_horaire:'Horaires de l\'école primaire privée',
        primaire_horaire1:'Ecole : lundi, mardi, jeudi et vendredi, de 07h30 à 15h30;',
        primaire_horaire2:'mercredi',
        primaire_horaire3:'de 7h30 à 12h30.',
      
       /************** FIN PAGE  PRIMAIRE ANNEE SCOLAIRE ******************/
      
      
      
      
      
       /************** DEBUT CALENDRIER ANNEE SCOLAIRE ******************/
      
      calendrier_titre:'Calendrier scolaire de l\'année 2016 - 2017',
      calendrier_text:'Le complexe scolaire LA RELIANCE EDUCATIVE suit le calendrier scolaire officiel de l\'éducation de base au Cameroun.',
      
      calendrier_periode:'Période',
      calendrier_periode1:'Rentrée scolaire',
      calendrier_periode2:'Vacances de Noël',
      calendrier_periode3:'Vacances de Pâque',
      calendrier_periode4:'Grandes vacances',
      
      calendrier_debut:'Début',
      calendrier_debut1:'(A 15h30)',
      calendrier_debut2_rentree_scolaire:'Le lundi 05 septembre 2016 à 7h30 min',
      calendrier_debut3:'Vendredi 23 décembre 2016',
      calendrier_debut4:'Vendredi 31 mars 2017 à 15h30',
      calendrier_debut_gde_vacances:'Le vendredi 28 juillet 2017 à 15h30 min',
      
      calendrier_reprise:'Reprise',
      calendrier_reprise1:'(A 7h30)',
      calendrier_reprise2:'Lundi 09 janvier 2017',
      calendrier_reprise3:'Lundi 17 avril 2017 à 7h30',
      
       /************** FIN CALENDRIER  ********************/
      
      
      
      
      
       /************** DEBUT PAGE CONTACT  ********************/
      
       contact_titre:'Contact',
      
       contact_localisation1:'Localisation',
       contact_localisation2:'Douala - Cameroun',
       contact_localisation2:'Bonabéri ( par "Quatre étages" au lieu dit "barrière Washington" )',
      
       contact_boite_postale:'Boîte postale',
       contact_boite_postale1:'BP :',
       contact_boite_postale2:'Douala - Cameroun',
       contact_boite_postale3:'TEL / FAX :',
      
       contact_telephone:'Téléphone',
       contact_telephone1:'675 68 67 26',
       contact_telephone2:'697 80 50 36',
       contact_telephone3:'677 32 28 71',
      
       contact_email:'Email',
       contact_email1:'mail@gmail.com',
      
       contact_formulaire_titre:'Contactez-nous',
       contact_formulaire_nom:'Votre nom',
       contact_formulaire_tel:'Votre Tél',
       contact_formulaire_email:'Votre email',
       contact_formulaire_message:'Votre message',
       contact_formulaire_bouton_envoyer:'Envoyer',
      
       /************** FIN PAGE CONTACT  ********************/
      
      
      
      
       /************** DEBUT PAGE ACTIVITÉ EXTRA-SCOLAIRE  ********************/
      
      activite_extra_scolaire_titre:'Activités extra scolaires',
      activite_extra_scolaire_text:'Célébration de la journée mondiale de la santé bucco-dentaire au complexe scolaire LA RÉLIANCE EDUCATIVE.',
      activite_extra_scolaire_nos_plus:'Nos plus',
      
       /************** FIN PAGE ACTIVITÉ EXTRA-SCOLAIR  ********************/
      
      
      
      
      
       /************** DEBUT DEVELOPPEUR  ********************/ 
        dev1:'Développer par',
        dev2:'Tous les droits sont réservés',
       /************** FIN DEVELOPPEUR  ********************/
      
  });
  $translateProvider.preferredLanguage('fr');
});
