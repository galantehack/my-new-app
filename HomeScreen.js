
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, Switch   } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importar MaterialIcons

const verses = [
    "“El amor es paciente, es bondadoso…”",
    "“Confía en el Señor con todo tu corazón…”",
    "“Todo lo puedo en Cristo que me fortalece.”",
    "“Donde está el Espíritu del Señor, allí hay libertad.”",
    "“El Señor es mi pastor; nada me faltará.”",
    "“En todo tiempo ama el amigo…”",
    "“Buscad primero el reino de Dios y su justicia…”",
    "“La fe es la certeza de lo que se espera…”",
  ];
  
const HomeScreen = ({ navigation }) => {
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];
  const versesDictionary = {
    "alabanza": [
        "Salmo 150:6 - Todo lo que respira alabe al SEÑOR. ¡Aleluya!",
        "Salmo 100:1 - ¡Aclamen alegres al SEÑOR, habitantes de toda la tierra!",
        "Salmo 95:1 - Vengan, cantemos con alegría al SEÑOR; aclamemos a la roca de nuestra salvación.",
        "Salmo 103:1 - Bendice, oh alma mía, al SEÑOR, y bendiga todo mi ser su santo nombre.",
        "Salmo 30:4 - Canten al SEÑOR, ustedes sus fieles; alaben su santo nombre.",
        "Salmo 34:1 - Bendeciré al SEÑOR en todo tiempo; su alabanza estará de continuo en mi boca.",
        "Salmo 145:3 - Grande es el SEÑOR y digno de toda alabanza; su grandeza es insondable.",
        "Salmo 147:1 - Alaben al SEÑOR, porque es bueno cantar salmos a nuestro Dios; porque es agradable, la alabanza es hermosa.",
        "Salmo 63:3 - Porque mejor es tu misericordia que la vida; mis labios te alabarán.",
        "Salmo 117:1 - Alaben al SEÑOR, naciones todas; pueblos todos, alábenle.",
        "Salmo 9:1 - Te alabaré, oh SEÑOR, con todo mi corazón; contaré todas tus maravillas.",
        "Salmo 119:164 - Siete veces al día te alabo a causa de tus justos juicios.",
        "Salmo 42:5 - ¿Por qué te abates, oh alma mía, y te turbas dentro de mí? Espera en Dios; porque aún he de alabarle.",
        "Salmo 22:3 - Pero tú eres santo, tú que habitas entre las alabanzas de Israel.",
        "Salmo 98:4 - Aclame al SEÑOR toda la tierra; prorrumpan y canten con júbilo.",
        "Salmo 136:1 - Alaben al SEÑOR, porque él es bueno; porque para siempre es su misericordia.",
        "Salmo 18:49 - Por tanto, yo te alabaré entre las naciones, oh SEÑOR; a ti cantaré salmos.",
        "Salmo 66:2 - Canten la gloria de su nombre; pongan gloria en su alabanza.",
        "Salmo 71:6 - Desde el vientre de mi madre he sido sustentado por ti; de ti he sido alabado continuamente.",
        "Salmo 146:2 - Alabaré al SEÑOR toda mi vida; cantaré alabanzas a mi Dios mientras viva.",
        "Salmo 48:1 - Grande es el SEÑOR y digno de ser alabado en la ciudad de nuestro Dios, en su monte santo.",
        "Salmo 105:1 - Alaben al SEÑOR; invocad su nombre; dad a conocer sus obras entre los pueblos.",
        "Salmo 86:9 - Todas las naciones que hiciste vendrán y adorarán delante de ti, oh SEÑOR; glorificarán tu nombre.",
        "Salmo 145:21 - Mi boca proclamará la alabanza del SEÑOR, y toda carne alabe su santo nombre.",
        "Salmo 89:1 - Cantaré la misericordia del SEÑOR eternamente; de generación en generación haré notoria su fidelidad.",
        "Salmo 40:3 - Puso en mi boca un cántico nuevo, alabanza a nuestro Dios; verán esto muchos y temerán, y confiarán en el SEÑOR.",
        "Salmo 118:14 - El SEÑOR es mi fuerza y mi canción, y ha sido mi salvación.",
        "Salmo 15:1 - ¿Quién habitará en tu tabernáculo? ¿Quién morará en tu monte santo?",
        "Salmo 22:26 - Los afligidos comerán y serán saciados; alabarán al SEÑOR los que le buscan.",
        "Salmo 30:5 - Porque su ira dura solo un momento; su favor, toda la vida. Por la noche durará el lloro, y a la mañana vendrá la alegría.",
        "Salmo 40:16 - Alégrense y gócense en ti todos los que te buscan; digan siempre: ¡Sea engrandecido el SEÑOR!",
        "Salmo 63:5 - Mi alma será saciada como con un banquete de grasas; y con labios de júbilo te alabaré.",
        "Salmo 89:15 - Bienaventurado el pueblo que sabe aclamarte; andará, oh SEÑOR, a la luz de tu rostro.",
        "Salmo 149:1 - ¡Aleluya! Canten al SEÑOR un cántico nuevo, su alabanza en la congregación de los santos.",
        "Salmo 9:11 - Canten a Jehová, que habita en Sión; anúncienle entre los pueblos sus obras.",
        "Salmo 37:4 - Deléitate asimismo en el SEÑOR, y él te concederá las peticiones de tu corazón.",
        "Salmo 95:2 - Vengamos ante su presencia con acción de gracias; aclamémosle con cánticos.",
        "Salmo 147:7 - Canten al SEÑOR con acción de gracias; canten salmos a nuestro Dios con el arpa."
    ],
    "esperanza": [
        "Jeremías 29:11 - Porque yo sé los planes que tengo para ustedes, afirma el SEÑOR, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza.",
        "Romanos 15:13 - Que el Dios de la esperanza los llene de toda alegría y paz en la fe, para que abunden en esperanza por el poder del Espíritu Santo.",
        "Salmo 39:7 - Ahora, Señor, ¿qué esperaré? Mi esperanza está en ti.",
        "Salmo 71:14 - Yo, en cambio, esperaré siempre; y te alabaré más y más.",
        "Proverbios 23:18 - Ciertamente hay un futuro, y tu esperanza no será frustrada.",
        "Hebreos 6:19 - Esta esperanza es un ancla firme y segura para el alma.",
        "Salmo 130:5 - Espero al SEÑOR, con todo mi ser; en su palabra he puesto mi esperanza.",
        "Salmo 31:24 - Esfuércense todos ustedes los que esperan en el SEÑOR; mantengan firme su corazón.",
        "Isaías 40:31 - Pero los que esperan al SEÑOR renovarán sus fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
        "Romanos 8:25 - Pero si esperamos lo que no vemos, con paciencia lo aguardamos.",
        "Salmo 62:5 - Solo en Dios halla descanso mi alma; de él viene mi esperanza.",
        "Salmo 119:166 - Espero en tu salvación, oh SEÑOR, y cumplo tus mandamientos.",
        "Isaías 26:3 - Tú guardarás en perfecta paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.",
        "1 Pedro 1:3 - Bendito sea el Dios y Padre de nuestro Señor Jesucristo, que según su gran misericordia nos ha hecho renacer para una esperanza viva por la resurrección de Jesucristo de los muertos.",
        "Salmo 9:18 - Porque no siempre será olvidado el afligido; ni la esperanza de los pobres perecerá para siempre.",
        "Tito 1:2 - En la esperanza de la vida eterna, la cual Dios, que no miente, prometió antes de los tiempos eternos.",
        "Salmo 119:81 - Anhela mi alma tu salvación; en tu palabra he esperado.",
        "Romanos 5:5 - Y la esperanza no avergüenza, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos fue dado.",
        "Salmo 62:8 - En Dios confíen en todo tiempo, oh pueblos; derramen delante de él su corazón; Dios es nuestro refugio.",
        "Salmo 71:5 - Porque tú, oh Señor, eres mi esperanza; seguridad mía desde mi juventud.",
        "Salmo 146:5 - Bienaventurado aquel cuya ayuda es el Dios de Jacob, cuya esperanza está en el SEÑOR su Dios.",
        "Isaías 38:18 - Porque el sepulcro no te alabará; la muerte no te alabará; ni los que descienden al sepulcro esperarán tu verdad.",
        "Salmo 84:12 - Oh SEÑOR de los ejércitos, dichoso el hombre que en ti confía.",
        "Isaías 41:10 - No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios. Te fortaleceré; sí, te ayudaré; te sostendré con la diestra de mi justicia.",
        "Lamentaciones 3:21 - Esto traigo a mi corazón; por lo tanto, esperaré.",
        "Salmo 27:14 - Espera al SEÑOR; esfuérzate y aliéntese tu corazón; sí, espera al SEÑOR.",
        "Salmo 52:9 - Te alabaré para siempre por lo que has hecho; y esperaré en tu nombre, porque es bueno delante de tus santos."
    ],
    "amor": [
        "1 Juan 4:8 - El que no ama no ha conocido a Dios, porque Dios es amor.",
        "1 Corintios 13:4-7 - El amor es paciente, es bondadoso; no tiene envidia, no es jactancioso, no se llena de orgullo. No es grosero, no busca lo suyo, no se irrita, no lleva cuentas del mal. No se alegra de la injusticia, sino que se alegra con la verdad. Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.",
        "Juan 3:16 - Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna.",
        "Romanos 13:10 - El amor no hace mal al prójimo; así que el amor es el cumplimiento de la ley.",
        "Gálatas 5:22 - Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",
        "1 Juan 4:19 - Nosotros amamos, porque él nos amó primero.",
        "Colosenses 3:14 - Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.",
        "1 Pedro 4:8 - Y ante todo, tengan entre ustedes ferviente amor; porque el amor cubrirá multitud de pecados.",
        "Efesios 5:2 - Y anden en amor, así como también Cristo los amó y se entregó a sí mismo por nosotros, ofrenda y sacrificio a Dios en olor fragante.",
        "1 Corintios 16:14 - Hagan todo con amor.",
        "Salmo 136:26 - Alaben al Dios de los cielos, porque para siempre es su misericordia.",
        "1 Juan 4:16 - Así que hemos llegado a conocer y a creer en el amor que Dios tiene por nosotros. Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él.",
        "Cantares 8:6 - Ponme como un sello sobre tu corazón, como una marca sobre tu brazo; porque fuerte es como la muerte el amor, y duro como el sepulcro el celo; sus brasas son brasas de fuego, llama vehemente.",
        "Romanos 5:8 - Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.",
        "1 Juan 3:16 - En esto conocemos el amor, en que él puso su vida por nosotros; también nosotros debemos poner nuestras vidas por los hermanos.",
        "1 Corintios 13:13 - Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor.",
        "Efesios 4:2 - Con toda humildad y mansedumbre, con paciencia, soportándoos unos a otros en amor.",
        "1 Tesalonicenses 3:12 - Y el Señor los haga crecer y abundar en amor unos para con otros y para con todos, así como también lo hacemos nosotros para con ustedes.",
        "Filipenses 1:9 - Y esto pido en oración, que su amor abunde aún más y más en conocimiento y en todo discernimiento.",
        "Salmo 143:8 - Hazme oír por la mañana tu misericordia, porque en ti he confiado; hazme saber el camino por donde ande, porque a ti he elevado mi alma.",
        "Colosenses 2:2 - Quiero que sean consolados sus corazones, unidos en amor, y que alcancen todas las riquezas de pleno entendimiento, para conocer el misterio de Dios, el Padre, y de Cristo.",
        "Gálatas 6:2 - Sobrellevad los unos las cargas de los otros, y cumplid así la ley de Cristo.",
        "Efesios 3:17 - Para que habite Cristo por la fe en vuestros corazones; a fin de que, arraigados y cimentados en amor.",
        "1 Juan 4:12 - Nadie ha visto jamás a Dios; si nos amamos unos a otros, Dios permanece en nosotros y su amor se ha perfeccionado en nosotros.",
        "1 Corintios 2:9 - Antes bien, como está escrito: Cosas que ojo no vio, ni oído oyó, ni han subido en corazón de hombre, son las que Dios ha preparado para los que le aman.",
        "Romanos 8:28 - Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados."
    ],
   
    "fortaleza": [
        "Filipenses 4:13 - Todo lo puedo en Cristo que me fortalece.",
        "Salmo 18:32 - El Dios que me ciñe de poder, y quien hace perfecto mi camino.",
        "Isaías 41:10 - No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios; te fortaleceré, te ayudaré y te sostendré con la diestra de mi justicia.",
        "Salmo 27:1 - El SEÑOR es mi luz y mi salvación; ¿de quién temeré? El SEÑOR es la fortaleza de mi vida; ¿de quién he de atemorizarme?",
        "Salmo 31:24 - Esfuércense todos ustedes los que esperan en el SEÑOR; mantengan firme su corazón.",
        "Nehemías 8:10 - No se entristezcan, porque el gozo del SEÑOR es su fortaleza.",
        "Isaías 40:29 - Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.",
        "2 Corintios 12:9 - Y me ha dicho: Bástate de mi gracia; porque mi poder se perfecciona en la debilidad.",
        "Salmo 46:1 - Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
        "Efesios 6:10 - Por lo demás, hermanos míos, fortaleceos en el SEÑOR y en el poder de su fuerza.",
        "Salmo 73:26 - Mi carne y mi corazón desmayan; mas la roca de mi corazón y mi porción es Dios para siempre.",
        "Romanos 15:5 - Y el Dios de la paciencia y consuelo les dé entre ustedes un mismo sentir según Cristo Jesús.",
        "Salmo 62:7 - En Dios está mi salvación y mi gloria; en Dios está mi roca de fortaleza, y mi refugio está en Dios.",
        "Isaías 43:2 - Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anhegarán; cuando pases por el fuego, no te quemarás, ni la llama arderá en ti.",
        "Salmo 94:22 - Mas el SEÑOR ha sido mi refugio, y mi Dios la roca de mi esperanza.",
        "Proverbios 18:10 - Torre fuerte es el nombre del SEÑOR; a ella correrá el justo y será levantado.",
        "Salmo 112:7 - No tendrá temor de malas noticias; su corazón está firme, confiado en el SEÑOR.",
        "1 Crónicas 16:11 - Busquen al SEÑOR y su poder; busquen siempre su rostro.",
        "Salmo 138:3 - En el día que clamé, me respondiste; me fortaleciste con vigor en mi alma.",
        "Salmo 121:2 - Mi ayuda viene del SEÑOR, que hizo los cielos y la tierra.",
        "Salmo 19:14 - Sean gratos los dichos de mi boca y la meditación de mi corazón delante de ti, oh SEÑOR, roca mía y redentor mío.",
        "Isaías 26:4 - Confíen en el SEÑOR para siempre, porque en el SEÑOR, el SEÑOR, está la fortaleza de los siglos.",
        "Hebreos 4:16 - Acerquémonos, pues, con confianza al trono de la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro.",
        "Salmo 23:4 - Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento.",
        "2 Tesalonicenses 2:17 - Consolen sus corazones y los afirmen en toda buena palabra y obra.",
        "Salmo 28:7 - El SEÑOR es mi fortaleza y mi escudo; en él confió mi corazón y fui ayudado.",
        "Proverbios 3:5-6 - Confía en el SEÑOR de todo tu corazón y no te apoyes en tu propia prudencia; reconocele en todos tus caminos, y él enderezará tus veredas."
    ],
    "miedo": [
        "Isaías 41:10 - No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios. Te fortalezco, te ayudo y te sostengo con mi mano derecha.",
        "Salmo 56:3 - En el día que temo, yo en ti confío.",
        "2 Timoteo 1:7 - Porque no nos ha dado Dios espíritu de temor, sino de poder, de amor y de dominio propio.",
        "Salmo 34:4 - Busqué al SEÑOR, y él me respondió; me libró de todos mis temores.",
        "Hebreos 13:6 - Así que, podemos decir confiadamente: El SEÑOR es mi ayudador; no temeré lo que me pueda hacer el hombre.",
        "Salmo 27:3 - Aunque un ejército acampe contra mí, no temerá mi corazón; aunque contra mí se levante guerra, yo estaré confiado.",
        "Romanos 8:15 - Porque no recibisteis el espíritu de esclavitud para estar otra vez en temor, sino que recibisteis el espíritu de adopción, por el cual clamamos: ¡Abba, Padre!",
        "1 Juan 4:18 - En el amor no hay temor, sino que el amor perfecto echa fuera el temor; porque el temor tiene que ver con el castigo, y el que teme no ha sido perfeccionado en el amor.",
        "Salmo 118:6 - El SEÑOR está conmigo; no temeré; ¿qué me puede hacer el hombre?",
        "Salmo 91:5-6 - No temerás el terror nocturno, ni saeta que vuele de día; ni pestilencia que ande en oscuridad, ni mortandad que en medio del día destruya.",
        "Isaías 43:1 - Pero ahora, así dice el SEÑOR, creador tuyo, oh Jacob, y formador tuyo, oh Israel: No temas, porque yo te redimí; te puse nombre; mío eres tú.",
        "Salmo 3:6 - No temeré a diez millares de gente que pusieran sitio contra mí.",
        "Deuteronomio 31:6 - Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos; porque el SEÑOR tu Dios es el que va contigo; no te dejará, ni te desamparará.",
        "Mateo 10:31 - Así que, no temáis; más valéis vosotros que muchos pajarillos.",
        "Isaías 35:4 - Decid a los de corazón apocado: ¡Esforzaos! No temáis; he aquí que vuestro Dios viene con venganza; con pago de Dios viene y os salvará.",
        "Lucas 12:32 - No temáis, manada pequeña, porque a vuestro Padre le ha placido daros el reino.",
        "Salmo 139:5 - Detrás y delante me rodeaste, y sobre mí pusiste tu mano.",
        "Salmo 125:1 - Los que confían en el SEÑOR son como el monte de Sion, que no se mueve, sino que permanece para siempre.",
        "Proverbios 29:25 - El temor del hombre pondrá lazo; mas el que confía en el SEÑOR será exaltado.",
        "Salmo 46:2 - Por tanto, no temeremos, aunque la tierra sea removida, y se traspasen los montes al corazón del mar.",
        "Isaías 26:3 - Tú guardarás en completa paz a aquel cuya mente en ti persevera; porque en ti ha confiado.",
        "Salmo 119:165 - Muchos paz tienen los que aman tu ley, y no hay para ellos tropiezo.",
        "Salmo 118:7 - El SEÑOR está entre los que me ayudan; por tanto, yo veré mi deseo en los que me aborrecen.",
        "Romanos 14:8 - Porque si vivimos, para el SEÑOR vivimos; y si morimos, para el SEÑOR morimos. Así que, ya sea que vivamos o que muramos, del SEÑOR somos.",
        "Salmo 112:7 - No tendrá temor de malas noticias; su corazón está firme, confiado en el SEÑOR.",
        "Salmo 22:4-5 - En ti confiaron nuestros padres; confiaron, y tú los libraste.",
        "Salmo 138:7 - Si anduviere en medio de la angustia, tú me vivificarás; contra la ira de mis enemigos extenderás tu mano, y me salvará tu diestra.",
        "Isaías 54:14 - Con justicia serás adornada; estarás lejos de la opresión, porque no temerás, y de temor, porque no se acercará a ti.",
        "Salmo 62:6 - Él solo es mi roca y mi salvación; es mi refugio; no seré movido.",
        "Salmo 30:5 - Porque un momento será su ira, pero su favor dura toda la vida; por la noche durará el lloro, y a la mañana vendrá la alegría."
    ],
    "triste": [
        "Mateo 5:4 - Bienaventurados los que lloran, porque ellos recibirán consolación.",
        "Salmo 34:18 - Cerca está el SEÑOR de los quebrantados de corazón, y salva a los contritos de espíritu.",
        "2 Corintios 1:3-4 - Bendito sea el Dios y Padre de nuestro Señor Jesucristo, el Padre de misericordias y Dios de toda consolación, el cual nos consuela en todas nuestras tribulaciones.",
        "Salmo 42:11 - ¿Por qué te abates, oh alma mía, y te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío.",
        "Romanos 12:15 - Alégrense con los que están alegres; lloren con los que lloran.",
        "Salmo 147:3 - Sana a los quebrantados de corazón, y venda sus heridas.",
        "Salmo 31:9 - Ten misericordia de mí, oh SEÑOR, porque estoy en angustia; consumido está de tristeza mi ojo, mi alma y mi cuerpo.",
        "Salmo 119:28 - Mi alma está de tristeza en gran manera; fortaléceme según tu palabra.",
        "1 Pedro 5:7 - Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
        "Salmo 40:12 - Porque innumerables males me han rodeado; han alcanzado mis maldades, y no puedo mirar; son más que los cabellos de mi cabeza, y mi corazón me falla.",
        "Salmo 56:8 - Mis paseos has contado; pon mis lágrimas en tu botella; ¿no están ellas en tu libro?",
        "Isaías 61:3 - A ordenar que a los afligidos de Sion se les dé gloria en lugar de ceniza, óleo de gozo en lugar de luto, vestido de alabanza en lugar de espíritu angustiado; y serán llamados árboles de justicia, plantío del SEÑOR para gloria suya.",
        "Romanos 8:18 - Pues tengo por cierto que las aflicciones de este tiempo no son comparables con la gloria venidera que en nosotros ha de manifestarse.",
        "Salmo 126:5 - Los que sembraron con lágrimas, con regocijo segarán.",
        "Salmo 38:9 - Señor, delante de ti está todo mi deseo, y mi suspiro no te es oculto.",
        "Salmo 22:1 - Dios mío, Dios mío, ¿por qué me has desamparado? ¿Por qué estás tan lejos de mi salvación, y de las palabras de mi clamor?",
        "Lamentaciones 3:22-23 - Por la misericordia del SEÑOR no hemos sido consumidos, porque nunca decayeron sus misericordias; nuevas son cada mañana; grande es tu fidelidad.",
        "Salmo 30:11 - Has cambiado mi lamento en baile; desataste mi cilicio, y me ceñiste de alegría.",
        "Isaías 40:31 - Pero los que esperan al SEÑOR, tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
        "Salmo 73:26 - Mi carne y mi corazón desfallecen; mas la roca de mi corazón y mi porción es Dios para siempre.",
        "Proverbios 15:13 - El corazón alegre constituye un buen remedio; mas el espíritu triste seca los huesos.",
        "Salmo 94:19 - En la multitud de mis pensamientos dentro de mí, tus consolaciones alegraban mi alma.",
        "Salmo 119:50 - Este es mi consuelo en mi aflicción, que tu palabra me ha vivificado.",
        "Salmo 139:14 - Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien.",
        "Salmo 119:75 - Conozco, oh SEÑOR, que tus juicios son justos, y que en tu fidelidad me afliges.",
        "1 Tesalonicenses 4:13 - No queremos, hermanos, que ignoréis acerca de los que duermen, para que no os entristezcáis como los otros que no tienen esperanza.",
        "Isaías 43:2 - Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán; cuando pases por el fuego, no te quemarás, ni la llama arderá en ti.",
        "Salmo 62:8 - En Dios confía en todo tiempo, oh pueblos; derramad delante de él vuestro corazón; Dios es nuestro refugio.",
        "Salmo 121:1-2 - Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene del SEÑOR, que hizo los cielos y la tierra."
    ],
    "feliz": [
        "Salmo 16:11 - Me mostrarás la senda de la vida; en tu presencia hay plenitud de gozo; delicias a tu diestra para siempre.",
        "Gálatas 5:22 - Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe.",
        "Nehemías 8:10 - No os entristezcáis, porque el gozo del SEÑOR es vuestra fuerza.",
        "Filipenses 4:4 - Regocijaos en el SEÑOR siempre. Otra vez digo: ¡Regocijaos!",
        "Salmo 118:24 - Este es el día que hizo el SEÑOR; nos gozaremos y alegraremos en él.",
        "Salmo 126:3 - Grande ha sido el SEÑOR con nosotros; estamos alegres.",
        "Salmo 94:19 - En la multitud de mis pensamientos dentro de mí, tus consolaciones alegraban mi alma.",
        "Salmo 30:5 - Porque un momento será su ira, pero su favor dura toda la vida; por la noche durará el lloro, y a la mañana vendrá la alegría.",
        "Romanos 15:13 - Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo.",
        "Proverbios 17:22 - El corazón alegre constituye un buen remedio; mas el espíritu triste seca los huesos.",
        "Salmo 97:12 - Alegraos, justos, en el SEÑOR, y alabad la memoria de su santidad.",
        "Salmo 32:11 - Alegraos en el SEÑOR y gozaos, justos; y cantad con júbilo todos vosotros los rectos de corazón.",
        "Salmo 5:11 - Pero alégrense todos los que en ti confían; canten con júbilo para siempre; cubreles tú, y ellos se regocijarán en ti.",
        "Salmo 19:8 - Los mandamientos del SEÑOR son rectos; alegran el corazón; el precepto del SEÑOR es puro; alumbra los ojos.",
        "Isaías 12:3 - Sacaréis con gozo aguas de las fuentes de la salvación.",
        "Salmo 126:5 - Los que sembraron con lágrimas, con regocijo segarán.",
        "1 Tesalonicenses 5:16 - Estad siempre gozosos.",
        "Salmo 21:6 - Porque le has concedido al rey que pida, y le has concedido las delicias de su corazón.",
        "Salmo 34:8 - Gustad y ved que es bueno el SEÑOR; dichoso el hombre que confía en él.",
        "Salmo 40:16 - Alégrense y gócense en ti todos los que te buscan; y digan siempre: Sea engrandecido el SEÑOR, que ama la salvación de su siervo.",
        "Proverbios 15:15 - Todos los días del afligido son difíciles, pero el de corazón contento tiene un banquete continuo.",
        "Salmo 43:4 - Iré a la altar de Dios, al Dios de mi alegría y de mi gozo, y te alabaré con arpa, oh Dios, Dios mío.",
        "Salmo 68:3 - Pero los justos se alegrarán; se gozarán delante de Dios y saltarán de alegría.",
        "Salmo 144:15 - Bienaventurado el pueblo que tiene esto; bienaventurado el pueblo cuyo Dios es el SEÑOR.",
        "Salmo 119:111 - Tu testimonios he tomado por heredad para siempre; porque son el gozo de mi corazón.",
        "Salmo 5:12 - Porque tú, oh SEÑOR, bendecirás al justo; como un escudo lo rodearás de tu favor."
    ],
    "perdon": [
        "Colosenses 3:13 - Soportándoos unos a otros, y perdonándoos unos a otros, si alguno tuviera queja contra otro; de la manera que Cristo os perdonó, así también hacedlo vosotros.",
        "Efesios 4:32 - Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó en Cristo.",
        "Mateo 6:14-15 - Porque si perdonan a otros sus ofensas, también les perdonará a ustedes su Padre celestial. Pero si no perdonan a otros sus ofensas, tampoco su Padre les perdonará a ustedes sus ofensas.",
        "Lucas 6:37 - No juzguen, y no serán juzgados; no condenen, y no serán condenados; perdonen, y serán perdonados.",
        "Salmo 103:12 - Cuanto está lejos el oriente del occidente, hizo alejar de nosotros nuestras rebeliones.",
        "Isaías 1:18 - Venid, luego, y razonemos, dice el SEÑOR; si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos.",
        "Mateo 18:21-22 - Entonces se le acercó Pedro y le dijo: Señor, ¿cuántas veces perdonaré a mi hermano que peque contra mí? ¿Hasta siete? Jesús le dijo: No te digo hasta siete, sino aún hasta setenta veces siete.",
        "Salmo 130:3-4 - Señor, si miras a los pecados, ¿quién, oh Señor, podrá mantenerse? Pero en ti hay perdón, para que seas reverenciado.",
        "Marcos 11:25 - Y cuando estéis orando, perdonad, si tenéis algo contra alguno; para que también vuestro Padre que está en los cielos os perdone a vosotros vuestras ofensas.",
        "Lucas 17:3-4 - Mirad por vosotros mismos. Si tu hermano pecare contra ti, repréndele; y si se arrepintiere, perdónale. Y si siete veces al día pecare contra ti, y siete veces al día volviera a ti, diciendo: Me arrepiento, perdónale.",
        "Santiago 5:15 - Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, les serán perdonados.",
        "Proverbios 28:13 - El que encubre sus pecados no prosperará; mas el que los confiesa y se aparta alcanzará misericordia.",
        "1 Juan 1:9 - Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados y limpiarnos de toda maldad.",
        "Romanos 12:19 - No os venguéis vosotros mismos, amados míos, sino dad lugar a la ira de Dios; porque está escrito: Mía es la venganza, yo pagaré, dice el Señor.",
        "Efesios 1:7 - En quien tenemos redención por su sangre, el perdón de pecados según las riquezas de su gracia.",
        "Hebreos 8:12 - Porque seré propicio a sus injusticias, y nunca más me acordaré de sus pecados y de sus iniquidades.",
        "Hechos 3:19 - Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados, para que vengan de la presencia del Señor tiempos de refrigerio."
    ],
    "victoria": [
        "Romanos 8:37 - Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó.",
        "1 Corintios 15:57 - Más gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo.",
        "1 Juan 5:4 - Porque todo lo que es nacido de Dios vence al mundo; y esta es la victoria que ha vencido al mundo, nuestra fe.",
        "Salmo 44:5 - Por medio de ti desharíamos a nuestros enemigos; en tu nombre haremos pedazos a nuestros adversarios.",
        "Salmo 60:12 - Con Dios haremos proezas, y él hollará a nuestros enemigos.",
        "2 Corintios 2:14 - Pero gracias a Dios, que siempre nos lleva en triunfo en Cristo.",
        "Salmo 20:7 - Algunos confían en carros, y otros en caballos; mas nosotros del nombre del SEÑOR nuestro Dios haremos memoria.",
        "Salmo 108:13 - Con Dios haremos proezas; y él hollará a nuestros enemigos.",
        "Gálatas 6:9 - No nos cansemos, pues, de hacer bien; porque a su tiempo cegaremos, si no desmayamos.",
        "Salmo 118:15 - Voz de júbilo y de salvación hay en las tiendas de los justos; la diestra del SEÑOR hace proezas.",
        "Salmo 98:1 - Cantad al SEÑOR un cántico nuevo, porque ha hecho maravillas; su diestra y su santo brazo le han dado la victoria.",
        "Isaías 25:8 - Destruirá la muerte para siempre; y enjugará el Señor Dios las lágrimas de todos los rostros; y quitará de toda la tierra la afrenta de su pueblo; porque el SEÑOR ha hablado.",
        "Hebreos 11:33-34 - Que por fe conquistaron reinos, hicieron justicia, alcanzaron promesas, taparon bocas de leones, apagaron fuegos impetuosos, escaparon a filo de espada; de débiles fueron hechos fuertes; tomaron fuerzas en guerra, pusieron en fuga ejércitos extranjeros.",
        "1 Timoteo 6:12 - Pelea la buena batalla de la fe; echa mano de la vida eterna, a la cual así mismo fuiste llamado, habiendo hecho la buena confesión delante de muchos testigos.",
        "Filipenses 4:13 - Todo lo puedo en Cristo que me fortalece.",
        "Romanos 16:20 - Y el Dios de paz aplastará en breve a Satanás bajo vuestros pies. La gracia de nuestro Señor Jesucristo sea con vosotros.",
        "Salmo 34:19 - Muchas son las aflicciones del justo; mas de todas ellas le librará el SEÑOR.",
        "Salmo 37:39 - Pero la salvación de los justos es de Jehová, y él es su fortaleza en el tiempo de angustia."
    ],
    "ayuda": [
        "Salmo 121:1-2 - Alzaré mis ojos a los montes; ¿de dónde vendrá mi ayuda? Mi ayuda viene del SEÑOR, que hizo los cielos y la tierra.",
        "Salmo 46:1 - Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
        "Isaías 41:13 - Porque yo soy el SEÑOR, tu Dios, quien te sostiene de tu mano derecha y te dice: No temas, yo te ayudo.",
        "Salmo 54:4 - He aquí, Dios es el que me ayuda; el Señor está con los que sostienen mi vida.",
        "Salmo 37:5 - Encomienda al SEÑOR tu camino; confía en él, y él hará.",
        "Mateo 11:28 - Vengan a mí todos los que están trabajados y cargados, y yo les haré descansar.",
        "Isaías 40:29 - Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas.",
        "Salmo 138:3 - En el día que clamé, me respondiste; me fortaleciste con vigor en mi alma.",
        "Filipenses 4:19 - Y mi Dios suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús.",
        "Salmo 91:15 - Me invocará, y yo le responderé; con él estaré yo en la angustia; lo libraré y le glorificaré.",
        "Isaías 43:2 - Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán; cuando pases por el fuego, no te quemarás, ni la llama arderá en ti.",
        "Salmo 9:9 - El SEÑOR será refugio del pobre, refugio en tiempos de angustia.",
        "Salmo 118:5 - Desde la angustia invoqué al SEÑOR; me respondió, y me puso en lugar espacioso.",
        "Romanos 8:26 - Y de igual manera el Espíritu ayuda nuestra debilidad; porque no sabemos lo que hemos de pedir como conviene; mas el Espíritu mismo intercede por nosotros con gemidos indecibles.",
        "Salmo 27:1 - El SEÑOR es mi luz y mi salvación; ¿de quién temeré? El SEÑOR es la fortaleza de mi vida; ¿de quién he de atemorizarme?",
        "2 Corintios 12:9 - Y me ha dicho: Bástate de mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.",
        "1 Pedro 5:7 - Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros."
    ],
  "gratitud": [
        "1 Tesalonicenses 5:18 - Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",
        "Colosenses 3:17 - Y todo lo que hacéis, sea de palabra o de hecho, hacedlo todo en el nombre del Señor Jesús, dando gracias a Dios Padre por medio de él.",
        "Efesios 5:20 - Dando siempre gracias por todo al Dios y Padre, en el nombre de nuestro Señor Jesucristo.",
        "Salmo 100:4 - Entrad por sus puertas con acción de gracias, por sus atrios con alabanza; alabadle, bendecid su nombre.",
        "Colosenses 2:7 - Arraigados y sobreedificados en él, y confirmados en la fe, así como habéis sido enseñados, abundando en acciones de gracias.",
        "Salmo 107:1 - Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia.",
        "Salmo 118:24 - Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.",
        "Salmo 136:1 - Alabad a Jehová, porque él es bueno, porque para siempre es su misericordia.",
        "Filipenses 4:6 - Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.",
        "Salmo 95:2 - Lleguemos ante su presencia con alabanza; aclamémosle con cánticos.",
        "1 Crónicas 16:34 - Alabad a Jehová, porque él es bueno; porque su misericordia es eterna.",
        "Salmo 28:7 - Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado, por lo que se gozó mi corazón, y con mi cántico le alabaré.",
        "Salmo 69:30 - Alabaré yo el nombre de Dios con cántico, lo exaltaré con alabanza.",
        "Isaías 12:4 - Y diréis en aquel día: Cantad a Jehová, aclamad su nombre, haced célebres en los pueblos sus obras, recordad que su nombre es engrandecido.",
        "Hebreos 13:15 - Así que, ofrezcamos siempre a Dios, por medio de él, sacrificio de alabanza, es decir, fruto de labios que confiesan su nombre.",
        "1 Corintios 15:57 - Más gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo.",
        "Salmo 9:1 - Te alabaré, oh Jehová, con todo mi corazón; contaré todas tus maravillas.",
        "Salmo 30:12 - Por tanto, a ti cantaré, gloria mía, y no estaré callado. Jehová Dios mío, te alabaré para siempre.",
        "2 Corintios 9:15 - ¡Gracias a Dios por su don inefable!",
        "Salmo 92:1 - Bueno es alabarte, oh Jehová, y cantar salmos a tu nombre, oh Altísimo.",
        "Lucas 17:15-16 - Entonces uno de ellos, viendo que había sido sanado, volvió, glorificando a Dios a gran voz, y se postró rostro en tierra a sus pies, dándole gracias; y éste era samaritano.",
        "Salmo 103:1-2 - Bendice, alma mía, a Jehová, y bendiga todo mi ser su santo nombre. Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios.",
        "Salmo 34:1 - Bendeciré a Jehová en todo tiempo; su alabanza estará de continuo en mi boca.",
        "1 Timoteo 4:4-5 - Porque todo lo que Dios creó es bueno, y nada es de desecharse, si se toma con acción de gracias; porque por la palabra de Dios y por la oración es santificado.",
        "Salmo 136:3 - Alabad al Señor de señores, porque para siempre es su misericordia.",
        "1 Crónicas 16:8 - Alabad a Jehová, invocad su nombre, dad a conocer en los pueblos sus obras.",
        "Salmo 7:17 - Alabaré a Jehová conforme a su justicia, y cantaré al nombre de Jehová el Altísimo.",
        "Salmo 100:2 - Servid a Jehová con alegría; venid ante su presencia con regocijo.",
        "Efesios 1:16 - No ceso de dar gracias por vosotros, haciendo memoria de vosotros en mis oraciones.",
        "Daniel 2:23 - A ti, oh Dios de mis padres, te doy gracias y te alabo, porque me has dado sabiduría y fuerza, y ahora me has revelado lo que te pedimos."
    ],
    "sabiduria": [
        "Proverbios 2:6 - Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia.",
        "Santiago 1:5 - Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.",
        "Proverbios 4:7 - Sabiduría ante todo; adquiere sabiduría; y sobre todas tus posesiones adquiere inteligencia.",
        "Proverbios 3:13 - Bienaventurado el hombre que halla la sabiduría, y que obtiene la inteligencia.",
        "Colosenses 2:3 - En quien están escondidos todos los tesoros de la sabiduría y del conocimiento.",
        "Proverbios 1:7 - El principio de la sabiduría es el temor de Jehová; los insensatos desprecian la sabiduría y la enseñanza.",
        "Proverbios 9:10 - El temor de Jehová es el principio de la sabiduría, y el conocimiento del Santísimo es la inteligencia.",
        "Proverbios 16:16 - Mejor es adquirir sabiduría que oro preciado; y adquirir inteligencia vale más que la plata.",
        "Proverbios 19:20 - Escucha el consejo, y recibe la corrección, para que seas sabio en tu vejez.",
        "Job 28:28 - Y dijo al hombre: He aquí que el temor del Señor es la sabiduría, y el apartarse del mal, la inteligencia.",
        "Salmo 111:10 - El principio de la sabiduría es el temor de Jehová; buen entendimiento tienen todos los que practican sus mandamientos; su loor permanece para siempre.",
        "Proverbios 12:15 - El camino del necio es derecho en su opinión; mas el que obedece al consejo es sabio.",
        "Eclesiastés 7:12 - Porque escudo es la sabiduría, y escudo es el dinero; pero la excelencia de la sabiduría es que da vida a sus poseedores.",
        "Proverbios 13:10 - Ciertamente la soberbia concebirá contienda; mas con los avisados está la sabiduría.",
        "Proverbios 15:33 - El temor de Jehová es enseñanza de sabiduría; y a la honra precede la humildad.",
        "Proverbios 14:8 - La ciencia del prudente está en entender su camino; mas la indiscreción de los necios es engaño.",
        "Proverbios 3:21 - Hijo mío, no se aparten estas cosas de tus ojos; guarda la ley y el consejo.",
        "Salmo 90:12 - Enséñanos de tal modo a contar nuestros días, que traigamos al corazón sabiduría.",
        "Proverbios 19:8 - El que posee entendimiento ama su alma; el que guarda la inteligencia hallará el bien.",
        "Proverbios 8:11 - Porque mejor es la sabiduría que las piedras preciosas; y todo cuanto se puede desear, no es de compararse con ella.",
        "Proverbios 24:14 - Así será a tu alma el conocimiento de la sabiduría; si la hallares, tendrás recompensa, y al fin tu esperanza no será cortada.",
        "1 Corintios 1:30 - Mas por él estáis vosotros en Cristo Jesús, el cual nos ha sido hecho por Dios sabiduría, justificación, santificación y redención.",
        "Isaías 33:6 - Y reinarán en tus tiempos la sabiduría y la ciencia, y abundancia de salvación; el temor de Jehová será su tesoro.",
        "Proverbios 14:1 - La mujer sabia edifica su casa; mas la necia con sus manos la derriba.",
        "Santiago 3:17 - Pero la sabiduría que es de lo alto es primeramente pura, después pacífica, amable, benigna, llena de misericordia y de buenos frutos, sin incertidumbre ni hipocresía.",
        "1 Corintios 2:6 - Sin embargo, hablamos sabiduría entre los que han alcanzado madurez; y sabiduría no de este siglo, ni de los príncipes de este siglo, que perecen."
    ]
  }
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  
  const handlePress = (feeling) => {
    const selectedVerses = versesDictionary[feeling];
    const randomVerse = selectedVerses[Math.floor(Math.random() * selectedVerses.length)];
    // Seleccionar un versículo aleatorio
    

    // Navegamos a la pantalla de versículo y pasamos el versículo aleatorio
    navigation.navigate('Verse', { verse: randomVerse });
  };

  return (
    
    
    <SafeAreaView style={[styles.safeArea, isEnabled ? styles.darkContainer : styles.lightContainer]}>
         <View>
        <Text style={isEnabled ? styles.darkText : styles.lightText }>{isEnabled ? 'Modo Oscuro Activado' : 'Modo Oscuro Desactivado'}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    {/* Título y subtítulo fuera del ScrollView */}
    <View style={[styles.headerContainer, isEnabled ? styles.darkBackground : styles.lightBackground]}>
    <Text style={[styles.title, isEnabled ? styles.darkText : styles.lightText]}>Palabra en Sentimiento</Text>
    <Text style={[styles.subtitle, isEnabled ? styles.darkText : styles.lightText]}>¿Cuál es tu sentimiento hoy?</Text>
    <Text style={[styles.subtitle, isEnabled ? styles.darkText : styles.lightText]}>encuentra inspiración y consuelo en las escrituras</Text>
    </View>
        
         {/* Área de Scroll */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Versículo del Día */}
          <View style={styles.verseContainer}>
            <Text style={styles.verseText}>{randomVerse}</Text>
          </View>


        <View style={styles.buttonRow}>
        <TouchableOpacity
    style={styles.gameButton}
    onPress={() => navigation.navigate('Quiz')} // Navega a la pantalla del quiz
  >
    <Icon name="quiz" size={30} color="#fff" style={styles.iconStyle} />
    <Text style={styles.textButton}>Quiz Bíblico</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.gameButton}
    onPress={() => navigation.navigate('Desafío de Versículos')} // Navega a la pantalla de desafío de versículos
  >
    <Icon name="star" size={30} color="#fff" style={styles.iconStyle} />
    <Text style={styles.textButton}>Desafío de Versículos</Text>
  </TouchableOpacity>
      </View>


        <View style={styles.buttonsContainer}>
          {buttonsData.map((button) => (
            <TouchableOpacity
              key={button.feeling}
              style={styles.button}
              onPress={() => handlePress(button.feeling)}
            >
              <Image source={button.icon} style={styles.icon} />
              <Text style={styles.buttonText}>{button.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        </View>
        </ScrollView>

        <View style={styles.wordSearchButton}>
        <Text style={styles.textButton}>Créditos</Text>
        <Text style={isEnabled ? styles.darkText : styles.lightText}>Aquí van los créditos de la aplicación.</Text>
      </View>

        </SafeAreaView>
      
  
  );
};

// Datos de los botones
const buttonsData = [
  { feeling: 'alabanza', label: 'Alabanza', icon: require('./assets/icons/music.gif') },
  { feeling: 'esperanza', label: 'Esperanza', icon: require('./assets/icons/hope-star.gif') },
  { feeling: 'amor', label: 'Amor', icon: require('./assets/icons/charity.gif') },
  { feeling: 'fortaleza', label: 'Fortaleza', icon: require('./assets/icons/hard-hat.gif') },
  { feeling: 'miedo', label: 'Miedo', icon: require('./assets/icons/skeleton.gif') },
  { feeling: 'triste', label: 'Triste', icon: require('./assets/icons/sad.gif') },
  { feeling: 'feliz', label: 'Feliz', icon: require('./assets/icons/happy.gif') },
  { feeling: 'perdon', label: 'Perdón', icon: require('./assets/icons/sorry.gif') },
  { feeling: 'victoria', label: 'Victoria', icon: require('./assets/icons/yes.gif') },
  { feeling: 'ayuda', label: 'Ayuda', icon: require('./assets/icons/drowning.gif') },
  { feeling: 'gratitud', label: 'Gratitud', icon: require('./assets/icons/boss.gif') },
  { feeling: 'sabiduria', label: 'Sabiduría', icon: require('./assets/icons/social-media.gif') },

];



const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#f9f9f9',
    },
    darkBackground: {
        backgroundColor: '#333', // Color de fondo para modo oscuro
    },
    lightBackground: {
        backgroundColor: '#f9f9f9', // Color de fondo para modo claro
    },
    darkContainer: {
        flex: 1,
        backgroundColor: '#333',
      },
      lightContainer: {
        flex: 1,
        backgroundColor: '#fff',
      },
      darkText: {
        color: '#fff',
      },
      lightText: {
        color: '#4682B4', // Azul más oscuro
      },
    scrollContainer: {
      flexGrow: 1,
      paddingVertical: 20,
      paddingBottom: 15, // Más espacio inferior para evitar corte de botones
    },
    headerContainer: {
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: '#f9f9f9',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    container: {
      padding: 20,
      alignItems: 'center',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 2,
    },
    wordSearchButton: {
      backgroundColor: '#87CEEB',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      marginHorizontal: 2,
      flex: 1,
      marginTop: 20,
    },
    textButton: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginVertical: 15,
      textAlign: 'center',
      color: '#2980b9',
    },
    subtitle: {
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 20,
      color: '#666',
      textAlign: 'center',
    },
    verseContainer: {
      backgroundColor: '#87CEEB',
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    verseText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      textAlign: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button: {
      width: '30%',
      marginVertical: 10,
      alignItems: 'center',
      padding: 10,
      borderRadius: 15,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    icon: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginBottom: 5,
    },
    buttonText: {
      color: '#2980b9',
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    gameButton: {
      backgroundColor: '#4682B4', // Azul más oscuro
      padding: 15,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      flex: 1,
      flexDirection: 'row', // Para alinear el texto y el ícono en la misma fila
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  });
  
  
  export default HomeScreen;