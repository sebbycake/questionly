const questionsData = [
    "Of the people in this room, who is the most handsome?",
    "Of the people in this room, who is the prettiest?",
    "Name the most bad-tempered person in this room.",
    "When’s the last time you were flat-out rejected? How did you handle it?",
    "Of the people in this room, who is most likely to fail in life?",
    "Of the people in this room, who is most likely to remain single?",
    "Name the person with the worst fashion sense in this room.",
    "If you had to sleep with one person in this room, who would it be?",
    "Of the people in this room, who would you go on a date with?",
    "Who would you feel most comfortable with naked in this room?",
    "What’s the biggest secret you’ve ever kept from your parents?",
    "Name the ugliest person in this room.",
    "Who is the most judgmental in this room?",
    "What’s the biggest lie you’ve ever told without getting caught?",
    "Who do you most want to switch lives with and why in this room?",
    "Name the most egoistic person in this room.",
    "Of the people in this room, who do you disagree with most frequently?",
    "Name the most unreliable person in this room.",
    "If you could erase one past experience, what would it be?",
    "Name the most incompetent person in this room.",
    "What’s the wildest thing you’ve ever done to attract a crush?",
    "What’s the most flirtatious thing you’ve ever done?",
    "Who is the most hypocritical in this room?",
    "What three adjectives best describe your vagina/penis?",
    "Name the most stingy person in this room.",
    "Name one person you would remove from the clique.",
    "What did you think about the first (or last) time you masturbated?",
    "What’s the most surprising thing that’s ever turned you on?",
    "What’s the most awkward experience you’ve had with your crush?",
    "Of the people in this room, who do you consider the sluttiest?",
    "What’s the cruelest thing you’ve ever done to a friend?",
    "Name the most vain person in this room.",
    "How do you really feel about anal sex?",
    "What’s your favorite sex toy you have used?",
    "Who is the most spoiled in this room?",
    "What’s the biggest mistake you’ve ever made in bed?",
    "Who is the most irresponsible in this room?",
    "Most number of times you’ve ever masturbated within one week?",
    "Of the people in this room, who do you hate the most, and why?",
    "Name the person who is most likely to cheat in this room.",
    "What’s the biggest dating disappointment you’ve experienced so far?",
    "If you had to marry one person in this room, who would it be?",
    "Most embarrassing thing that your parents have caught you doing?",
    "If you had to cheat who would it be with?",
    "How old were you when you lost your virginity?",
    "Have you ever betrayed anyone in this room?",
    "Have you fallen in love with a friend of your partner?",
    "Name the most manipulative person in this room.",
    "Have you ever thought of cheating on your partner?",
    "Have you ever tried to take a sexy or naked picture of yourself?",
    "Who are you secretly attracted to?",
    "Name the most pretentious person in this room.",
    "How would you rate your looks on a scale of 1 to 10?",
    "Who is most difficult to please in this room?",
    "Name the most materialistic person in this room.",
    "Have you ever accidentally revealed a friends' secret?",
    "What is the worst date you’ve ever been on?",
    "Name the most immature person in this room.",
    "When was the last time you watched an adult movie? What was it?",
    "Would you marry someone for their money?",
    "Name the most gullible person in this room.",
    "Have you ever compromised your morals for money?",
    "How many people have you slept with?",
    "Why do you think we can't be more than friends?",
    "Name the most dishonest person in this room.",
    "Would you have sex on your first date?",
    "Of the people in the room, who do you trust the least?",
    "What is more important to you, revenge or forgiveness?",
    "Name the most horny person in this room.",
    "What is something you feel guilty about?",
    "Have you ever had a one night stand? With who?",
    "Who has the best ass here?",
    "Name the most boring person in this room.",
    "What are you most self-conscious about?",
    "What do most people think is true about you, but isn’t?",
    "What is something your friends would never expect that you do?",
    "Why did you break up with your last boyfriend or girlfriend?",
    "What is something that you have never told anyone?",
    "Tell me something you don’t want me to know.",
    "How many hearts have you broken before?",
    "Name the most anti-social in this room.",
    "What's your guiltiest pleasure?",
    "Have you ever received oral sex?",
    "Name the most unloyal person in this room.",
    "Have you ever been cheated on? By who?",
    "What habit can’t you seem to quit?",
    "How many people have you kissed?",
    "Would you cheat on your partner if they said it was okay?",
    "Name the most selfish person in this room.",
    "Would you donate an organ to someone in this room?",
    "Have you ever spread a rumor?",
    "What is your biggest insecurity?",
    "Name one bad personality trait of each person in the room.",
    "How many times have you masturbated today?",
    "Who is your favourite pornstar?",
    "Have you ever been tempted to cheat on someone?",
    "How many times have you ever masturbated in a day?",
    "What is your greatest fetish?",
    "Who is the most cowardly in this room?",
    "Name one person who complain the most in this room?",
    "Do you masturbate?",
    "What is your favourite category of porn?",
    "Have you ever given oral sex?",
    "Longest amount of time that you have gone without intercourse?",
    "Could you live without having sex for the rest of your life?",
    "Name one thing on your bucket list.",
    "What is your fondest memory?",
    "Longest amount of time you ever been away from home? And why?",
    "Have you ever had a crush on your colleague?",
    "Who are you most jealous of, and why?",
    "When’s the last time you apologized? What for?",
    "What’s the longest you’ve gone without showering?",
    "Are you a virgin?",
    "What is your greatest fear in a relationship?",
    "What’s your biggest regret in life?",
    "Do you still have feelings for any of your exes?",
    "Have you ever ghosted a date?",
    "Who is most likely to hold grudges in this room?",
    "When’s the last time you got dumped?",
    "Who are you the closest to in this room?",
    "Name one thing you’d change about every person in this room.",
    "What’s your deal breaker in a romantic relationship?",
    "Who was your first boyfriend/girlfriend?",
    "How long was your longest relationship? With who?",
    "What was your first heart break?",
    "Name the alpha male in this room.",
    "Do you secretly dislike anyone in this room?",
    "Have you ever said, “I love you” and not really meant it? To whom?",
    "Have you ever had a crush on a friend’s girlfriend or boyfriend?",
    "Who do you not want to see naked?",
    "Most embarrassing thing that has happened to you in public?",
    "Have you ever cheated on a test or an exam?",
    "What is your biggest pet peeve?",
    "Name one person you would unfriend in this room.",
    "What makes you laugh?",
    "What is something you find absolutely disgusting?",
    "How long can you last in bed usually?",
    "Do you masturbate to your female friends' photos?",
    "What do you like to do when you are alone?",
    "Doggy style or missionary position?",
    "Have you ever masturbated to local Instagram influencers?",
    "What is your favourite sex position?",
    "Which person's sister in this room would you hook up with?",
    "What is your favourite sex position?",
    "Who did you have your first kiss with?",
    "Spit or Swallow?",
    "Have you ever been in a serious relationship?",
    "Have you ever paid for sex?",
    "Where do you like to be touched?",
    "Name the person you would hang out the least in this room.",
    "How did you lose your virginity?",
    "Have you ever fantasized about anyone in this room?",
    "What are you like in bed?",
    "Virgin or non-virgin girl?",
    "Do you enjoy rough or slow sex?",
    "Does size matters to you?",
    "Tits or Ass?",
    "Would you ever do a threesome?",
    "Have you ever had a crush on your teacher in school?",
    "Who is the hottest teacher in <insert_name> school?",
    "Weirdest thing you have done when you're alone?",
    "<insert_three_names> Shoot.Shag.Marry.",
    "Juiciest clubbing story?",
    "Describe <insert_name> in one word.",
    "Describe your ideal type.",
    "Who are you the most awkward with in this room?",
    "Have you ever been jealous of <insert_name>?",
    "Who do you think is a better friend, <insert_name> or me?",
    "Who is the most attention-seeking in this room?",
    "Which part of your body are you most insecure about?",
    "How much money would it take to make out with <insert_name>?",
    "Who is most likely to be your long term friend in this room?",
    "Would you rather be a virgin forever or have sex with your sibling one time?",
    "Would you rather live forever or die in the next five minutes?",
    "Would you rather be an ugly genius or a hot idiot?",
    "Would you rather have sex with my best friend, or with your best friend?",
    "Would you rather give up sex or masturbating for a month?",
    "Would you rather be with someone who loves you more or with someone you love more?",
    "Would you rather be horny all the time or never be able to have an orgasm?",
    "Would you rather get a call from someone you slept with saying she has an STD or that she’s pregnant?",
    "Blowjob or handjob?",
    "Fingering or sex?",
    "Would you rather win $50,000 or let your best friend win $500,000?",
    "Would you rather know how you will die or when you will die?",
    "Would you rather forget how to speak or how to read?",
    "Would you rather have 5 failed marriages or never get married?",
    "Would you rather have many FWB or a partner who really loves you?",
    "Would you rather forget your partner’s birthday or your anniversary every year?",
    "Would you rather be the funniest or the smartest person in a room?",
    "Would you rather clean up someone else’s vomit or blood?",
    "Would you rather hear a comforting lie or an uncomfortable truth?",
    "Would you rather have fortune or fame?",
    "Would you rather be able to read minds or predict the future?",
    "Would you rather give your parents or your boss access to your browser history?",
    "Would you rather have your boss or your parents look through your text messages?",
    "Would you rather be the class clown or the teacher’s pet?",
    "Would you rather lose all of your teeth or all of your hair?",
    "Would you rather go blind or deaf?",
    "Would you rather die before or after your spouse?",
    "Would you rather be a feminine man or a masculine woman?",
    "Would you rather be always in debt or never be able to make more than $3,500 a month?",
    "Would you rather be constantly tired no matter how much you sleep or constantly hungry no matter how much you eat?",
    "Would you rather be feared by all or loved by all?",
    "Would you rather be held in high regard by your parents or your friends?",
    "Would you rather be poor but help people or become incredibly rich by hurting people?",
    "Would you rather work very hard at a rewarding job or hardly have to work at a job that isn’t rewarding?",
    "Would you rather kill your best friend or your partner?",
    "What makes a person beautiful to you?",
    "What personality trait do you wish you had?",
    "Would you rather have more time or more money?",
    "Would you rather be too busy or be bored?",
    "Would you rather have many good friends or one very best friend?",
    "Would you rather be good-looking or have many friends?",
    "Would you rather be kind or loyal?",
    "Would you rather be caught cheating or catch me cheating?",
    "Would you rather know it all or have it all?",
    "Have you ever walked in on your parents doing it?",
    "What's the first thing you would do if you woke up one day as the opposite sex?",
    "Who is your secret crush?",
    "Do you think you'll marry your current girlfriend/boyfriend?",
    "What is the most illegal thing you have ever done?",
    "Who in this room would be the worst person to date? Why?",
    "What size is your bra?",
    "You win a trip and are allowed to bring two people. Who do you pick?",
    "If you had to flash just one person in this room, who would it be?",
    "Who has the best smile in this room?",
    "Who here do you think would be the best kisser?",
    "Have you ever tried drugs?",
    "Do you have hidden piercings or tattoos?",
    "Who has seen you without clothes on?",
    "Have you ever sent a nude selfie? Who would you send it to?",
    "What's your ultimate sexual fantasy?",
    "Tell us about your first kiss.",
    "Have you ever taken a pregnancy test kit?",
    "Have you ever got arrested?",
    "Have you ever worn the same underwear two days in a row?",
    "What's the most useless talent you have?",
    "What makes you happy?",
    "Have you ever lied to your partner to avoid an intimate moment?",
    "What’s the dirtiest thought you’ve ever had?",
    "Have you ever considered being a pornstar?",
    "Have you ever made out with someone here?",
    "Have you ever lied on your resume to get a job?",
    "Have you ever practiced kissing in front of a mirror?",
    "Do you pick your nose when you’re alone?",
    "If someone offered you $1 million dollars to break up with your S/O, would you do it?",
    "Have you ever been caught checking someone out?",
    "What was the last R-rated movie you watched?",
    "Which part of your body are you ticklish?",
    "Where is the craziest place you have ever had sex?",
    "Have you ever won an award you didn’t deserve?",
    "Have you ever cheated on someone?",
    "Which is worse, physical pain or emotional pain?",
    "Have you ever had a near-death experience?",
    "What’s something you wish you were better at?",
    "What is the worst pain you’ve ever experienced?",
    "What is the best advice you have ever received?",
    "Have you ever smoked marijuana?",
    "Have you ever worn a G-string?",
    "Have you ever used a dildo?",
    "When was the last time you fingered yourself?",
    "Have you ever had a paranormal experience?",
    "Which local Instagram influencer have you fantasised before?",
    "When was the last time you shaved your pubes?",
]


export default questionsData