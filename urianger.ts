const { Telegraf } = require('telegraf')

let mappedWords = new Map<string, string>();

mappedWords.set("again", "once more");
mappedWords.set("are", "art");
mappedWords.set("bad", "dire");
mappedWords.set("between", "'twixt");
mappedWords.set("come", "cameth");
mappedWords.set("crazy", "chaos");
mappedWords.set("cool", "excellent");
mappedWords.set("dearest", "dearest");
mappedWords.set("defeat", "vanquish");
mappedWords.set("did", "didst");
mappedWords.set("didn't", "didst not");
mappedWords.set("do", "doth");
mappedWords.set("don't", "doth not");
mappedWords.set("does", "doth");
mappedWords.set("fast", "fleeting");
mappedWords.set("go", "goest");
mappedWords.set("have", "hath");
mappedWords.set("hello", "hail");
mappedWords.set("here", "hither");
mappedWords.set("hey", "hail");
mappedWords.set("hi", "hail");
mappedWords.set("it is", "'tis");
mappedWords.set("its", "'tis");
mappedWords.set("killed", "slain");
mappedWords.set("many", "numerous");
mappedWords.set("my", "mine")
mappedWords.set("need", "requireth");
mappedWords.set("newbie", "neophyte");
mappedWords.set("no", "nay");
mappedWords.set("nah", "nay");
mappedWords.set("only", "merely");
mappedWords.set("perhaps", "mayhap");
mappedWords.set("please", "pray"); //prithee
mappedWords.set("plz", "pray"); //prithee
mappedWords.set("pls", "pray"); //prithee
mappedWords.set("probaby", "perhaps");
mappedWords.set("require", "requireth");
mappedWords.set("rises", "riseth");
mappedWords.set("sometimes", "On occasion");
mappedWords.set("sorry", "apologies");
mappedWords.set("there", "yon");
mappedWords.set("to", "unto");
mappedWords.set("tomorrow", "morrow");
mappedWords.set("want", "desire");
mappedWords.set("weird", "strange");
mappedWords.set("will", "shall");
mappedWords.set("win", "prevail");
mappedWords.set("written", "writ");
mappedWords.set("yes", "aye");
mappedWords.set("yep", "aye");
mappedWords.set("yea", "aye");
mappedWords.set("yesterday", "yester");
mappedWords.set("you", "thee"); //thou
mappedWords.set("your", "thy"); //thine
mappedWords.set("u", "thee"); //thou
mappedWords.set("whats", "what 'tis");
mappedWords.set("im", "I am");
mappedWords.set("bye", "farewell");
mappedWords.set("implying", "stating");
mappedWords.set("before", "ere");
mappedWords.set("possess", "possesseth");
mappedWords.set("idk", "I know not");

const bot = new Telegraf("525376101:AAEDew-9GlwBQuvbcNYQVcrFCVTYh0RgUb8");

function Translate(input: string):string
{
    var words = input.split(' ');
    var outputList = new Array<string>();
    let outputText = "";

    words.forEach((word:string) =>{
        let punctuation = "";
        let regex = RegExp(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g);
        let punctuationMatch = word.match(regex);
        let isUpper = !!word.match(/[A-Z]/g);
        word = word.toLowerCase();
        if(word.endsWith("...")){
            word = word.slice(0, -3);
            punctuation = "..."
        } else if(punctuationMatch){
            punctuation = punctuationMatch.join("");
            word = word.slice(0, -punctuationMatch.length);
        }

        let foundWord = mappedWords.get(word);
        if (foundWord)
        {
            word = foundWord;

            outputList.push(word);
        }
        else
        {
            outputList.push(word);
        }

        if (isUpper)
        {
            word = word[0].toUpperCase() + word.substring(1);
        }

        if (punctuation)
        {
            word += punctuation;
        }
    });

    outputText = outputList.join(" ");

    return outputText;
}

bot.on('text', (ctx: any) => ctx.reply(Translate(ctx.message.text)))

bot.launch()