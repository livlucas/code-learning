"use strict";
// HANGMAN GAME
// jogo de forca com as seguintes regras:
// - um jogador pode cometer 5 erros, o sexto erro é game over
// - as regras básicas de uma forca

    
var MAX_ATTEMPTS = 6,
	//banco de palavras a serem sorteadas
	dbWords = ['able','about','account','acid','across','act','addition','adjustment','advertisement','after','again','against','agreement','air','all','almost','among','amount','amusement','and','angle','angry','animal','answer','ant','any','apparatus','apple','approval','arch','argument','arm','army','art','attack','attempt','attention','attraction','authority','automatic','awake','baby','back','bad','bag','balance','ball','band','base','basin','basket','bath','beautiful','because','bed','bee','before','behaviour','belief','bell','bent','berry','between','bird','birth','bit','bite','bitter','black','blade','blood','blow','blue','board','boat','body','boiling','bone','book','boot','bottle','box','boy','brain','brake','branch','brass','bread','breath','brick','bridge','bright','broken','brother','brown','brush','bucket','building','bulb','burn','burst','business','but','butter','button','cake','camera','canvas','card','care','carriage','cart','cat','cause','certain','chain','chalk','chance','change','cheap','cheese','chemical','chest','chief','chin','church','circle','clean','clear','clock','cloth','cloud','coal','coat','cold','collar','colour','comb','come','comfort','committee','common','company','comparison','competition','complete','complex','condition','connection','conscious','control','cook','copper','copy','cord','cork','cotton','cough','country','cover','cow','crack','credit','crime','cruel','crush','cry','cup','cup','current','curtain','curve','cushion','damage','danger','dark','daughter','day','dead','dear','death','debt','decision','deep','degree','delicate','dependent','design','desire','destruction','detail','development','different','digestion','direction','dirty','discovery','discussion','disease','disgust','distance','distribution','division','dog','door','doubt','down','drain','drawer','dress','drink','driving','drop','dry','dust','ear','early','earth','east','edge','education','effect','egg','elastic','electric','end','engine','enough','equal','error','even','event','ever','every','example','exchange','existence','expansion','experience','expert','eye','face','fact','fall','false','family','far','farm','fat','father','fear','feather','feeble','feeling','female','fertile','fiction','field','fight','finger','fire','first','fish','fixed','flag','flame','flat','flight','floor','flower','fly','fold','food','foolish','foot','for','force','fork','form','forward','fowl','frame','free','frequent','friend','from','front','fruit','full','future','garden','general','get','girl','give','glass','glove','goat','gold','good','government','grain','grass','great','green','grey','grip','group','growth','guide','gun','hair','hammer','hand','hanging','happy','harbour','hard','harmony','hat','hate','have','head','healthy','hear','hearing','heart','heat','help','high','history','hole','hollow','hook','hope','horn','horse','hospital','hour','house','how','humour','ice','idea','ill','important','impulse','increase','industry','ink','insect','instrument','insurance','interest','invention','iron','island','jelly','jewel','join','journey','judge','jump','keep','kettle','key','kick','kind','kiss','knee','knife','knot','knowledge','land','language','last','late','laugh','law','lead','leaf','learning','leather','left','leg','let','letter','level','library','lift','light','like','limit','line','linen','lip','liquid','list','little','living','lock','long','look','loose','loss','loud','love','low','machine','make','male','man','manager','map','mark','market','married','mass','match','material','may','meal','measure','meat','medical','meeting','memory','metal','middle','military','milk','mind','mine','minute','mist','mixed','money','monkey','month','moon','morning','mother','motion','mountain','mouth','move','much','muscle','music','nail','name','narrow','nation','natural','near','necessary','neck','need','needle','nerve','net','new','news','night','noise','normal','north','nose','not','note','now','number','nut','observation','off','offer','office','oil','old','only','open','operation','opinion','opposite','orange','order','organization','ornament','other','out','oven','over','owner','page','pain','paint','paper','parallel','parcel','part','past','paste','payment','peace','pen','pencil','person','physical','picture','pig','pin','pipe','place','plane','plant','plate','play','please','pleasure','plough','pocket','point','poison','polish','political','poor','porter','position','possible','pot','potato','powder','power','present','price','print','prison','private','probable','process','produce','profit','property','prose','protest','public','pull','pump','punishment','purpose','push','put','quality','question','quick','quiet','quite','rail','rain','range','rat','rate','ray','reaction','reading','ready','reason','receipt','record','red','regret','regular','relation','religion','representative','request','respect','responsible','rest','reward','rhythm','rice','right','ring','river','road','rod','roll','roof','room','root','rough','round','rub','rule','run','sad','safe','sail','salt','same','sand','say','scale','school','science','scissors','screw','sea','seat','second','secret','secretary','see','seed','seem','selection','self','send','sense','separate','serious','servant','sex','shade','shake','shame','sharp','sheep','shelf','ship','shirt','shock','shoe','short','shut','side','sign','silk','silver','simple','sister','size','skin','skirt','sky','sleep','slip','slope','slow','small','smash','smell','smile','smoke','smooth','snake','sneeze','snow','soap','society','sock','soft','solid','some','son','song','sort','sound','soup','south','space','spade','special','sponge','spoon','spring','square','stage','stamp','star','start','statement','station','steam','steel','stem','step','stick','sticky','stiff','still','stitch','stocking','stomach','stone','stop','store','story','straight','strange','street','stretch','strong','structure','substance','such','sudden','sugar','suggestion','summer','sun','support','surprise','sweet','swim','system','table','tail','take','talk','tall','taste','tax','teaching','tendency','test','than','that','the','then','theory','there','thick','thin','thing','this','thought','thread','throat','through','through','thumb','thunder','ticket','tight','till','time','tin','tired','toe','together','tomorrow','tongue','tooth','top','touch','town','trade','train','transport','tray','tree','trick','trouble','trousers','true','turn','twist','umbrella','under','unit','use','value','verse','very','vessel','view','violent','voice','waiting','walk','wall','war','warm','wash','waste','watch','water','wave','wax','way','weather','week','weight','well','west','wet','wheel','when','where','while','whip','whistle','white','who','why','wide','will','wind','window','wine','wing','winter','wire','wise','with','woman','wood','wool','word','work','worm','wound','writing','wrong','year','yellow','yes','yesterday','you','young'],

	//palavra para ser descoberta (pode ser alterada para qualquer outra)
	wordToGuess,
    //tentativas de letras erradas (devem ser inseridas na ordem que foram tentadas)
    wrongGuesses,
    //vetor com as letras descobertas. A posiçao de uma letra deve ser a mesma posiçao que
    //ela aparece na wordToGuess. ex.:
    // tentativa: "a"
    // guessedWord deve ser [undefined, "a", undefined, "a", undefined x 6]
    guessedWord;
    

function setWordToGuess(word) {
	wordToGuess = word;
	wrongGuesses = [];
	guessedWord = Array.apply(null, new Array(wordToGuess.length));
}
function sortRandomWord() {
	var randIndex, word;

	//sorteia um número entre 0 e o tamnho do dbWords;
	randIndex = Math.floor(
		Math.random() * dbWords.length
	);

	//pega a palavra do banco de palavras do índice sorteado
	word = dbWords[randIndex];

	//atualiza a palavra a ser descoberta, reinicializando todas as variaveis
	//relacionadas à palavra
	setWordToGuess(word);
}

//essa funcao faz uma tentativa de advinhar se uma letra está na palavra
//o resultado deve ser adicionado na ordem 
function guessALetter(letter) {
	var i = 0,
		j = 0,
		guessIsRight = false;

	while (j < wordToGuess.length) {
		if (letter === wrongGuesses[j]) {
			return;
		}
		j += 1;
	}

 	while (i < wordToGuess.length) {
		if (letter === wordToGuess[i]) {
			guessedWord[i] = wordToGuess[i];
			guessIsRight = true;
		} 

		i += 1;
	}
		
	if (!guessIsRight) {
		wrongGuesses[wrongGuesses.length] = letter;
	}
}


//deve retornar true se o jogador fez MAX_ATTEMPTS tentativas erradas
function isGameOver() {
    if (wrongGuesses.length >= MAX_ATTEMPTS) {
    	return true;
    }
    return false;
}

//deve retornar true se o jogador encontrou todas as letras da palavra
function isGameWon() {
	var i = 0;

	while (i < guessedWord.length) {
		if (guessedWord[i] === undefined) {
			return false;
		}
		i += 1;
	} 

	return true;
}

//NOTA: o jogo deve ser jogado pelo HTML e nao pelo console
//para fazer uma tentativa, digite a letra e aperte ENTER

