const dailyMessages = {quotes:['“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein', 
'“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi', 
'“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain', 
'“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt', 
'“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale', 
'“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson', 
'“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren'],

jokes:['"I used to be addicted to soap, but I\'m clean now."', 
'"A guy walks into a bar...and he was disqualified from the limbo contest."', 
'"You think swimming with sharks is expensive? Swimming with sharks cost me an arm and a leg."', 
'"When two vegans get in an argument, is it still called a beef?"', 
'"I ordered a chicken and an egg from Amazon. I\'ll let you know..."', 
'"Do you wanna box for your leftovers?" "No, but I\'ll wrestle you for them."', 
'"That car looks nice but the muffler seems exhausted."', 
'"Shout out to my fingers. I can count on all of them."', 
'"If a child refuses to nap, are they guilty of resisting a rest?"', 
'"What country\'s capital is growing the fastest?" "Ireland. Every day it\'s Dublin."', 
'"I once had a dream I was floating in an ocean of orange soda. It was more of a fanta sea."', 
'"Did you know corduroy pillows are in style? They\'re making headlines."', 
'"Did you hear about the kidnapping at school? It\'s okay, he woke up."', 
'"A cheeseburger walks into a bar. The bartender says, \'Sorry, we don\'t serve food here.\'"', 
'"I once got fired from a canned juice company. Apparently I couldn\'t concentrate."'],

tips:['Track gratitude and achievement with a journal. Include 3 things you were grateful for and 3 things you were able to accomplish each day', 
'Start your day with a cup of co­ffee. Coff­ee consumption is linked to lower rates of depression. If you can’t drink coff­ee because of the caff­eine, try another good-for-you drink like green tea.', 
'Set up a getaway. It could be camping with friends or a trip to the tropics. The act of planning a vacation and having something to look forward to can boost your overall happiness for up to 8 weeks!', 
'4, Work your strengths. Do something you\'re good at to build self-confidence, then tackle a tougher task.', 
'Keep it cool for a good night\'s sleep. The optimal temperature for sleep is between 60 and 67 degrees Fahrenheit.', 
'"You don\'t have to see the whole staircase, just take the first step." - Martin Luther King, Jr. Think of something in your life you want to improve, and figure out what you can do to take a step in the right direction.', 
'Experiment with a new recipe, write a poem, paint or try a Pinterest project. Creative expression and overall well-being are linked.', 
'Show some love to someone in your life. Close, quality, relationships are key for a happy, healthy life.', 
'Boost brainpower by treating yourself to a couple pieces of dark chocolate every few days. The flavonoids, caffeine, and theobromine in chocolate are thought to work together to improve alertness and mental skills.', 
'“There is no greater agony than bearing an untold story inside of you.”  -Maya Angelou. If you have personal experience with mental illness or recovery, share on Twitter, Instagram and Tumblr with #mentalillnessfeelslike. Check out what other people are saying here.', 
'Sometimes, we don\'t need to add new activities to get more pleasure. We just need to soak up the joy in the ones we\'ve already got. Trying to be optimistic doesn\'t mean ignoring the uglier sides of life. It just means focusing on the positive as much as possible.', 
'Feeling anxious?  Take a trip down memory lane and do some coloring for about 20 minutes to help you clear your mind. Pick a design that\'s geometric and a little complicated for the best effect. Check out hundreds of free printable coloring pages here.'],

quotesLen(){
    return this.quotes.length
},

jokesLen(){
    return this.jokes.length
},

tipsLen(){
    return this.tips.length
}
};


function getARandomNumber(num){
    return Math.floor(Math.random() * num);
}

function getMessages(){
let messages=[];
messages.push(dailyMessages.quotes[getARandomNumber(dailyMessages.quotesLen())])
messages.push(dailyMessages.jokes[getARandomNumber(dailyMessages.jokesLen())])
messages.push(dailyMessages.tips[getARandomNumber(dailyMessages.tipsLen())])
return messages
}

function displayMessages(arrayMessages){
    let quoteDisplay = arrayMessages[0]
    let jokesDisplay = arrayMessages[1]
    let tipDisplay = arrayMessages[2]
    console.log(`Quote of the day: ${quoteDisplay}\nJoke of the day: ${jokesDisplay}\nTip of the day: ${tipDisplay}`)

}

displayMessages(getMessages())