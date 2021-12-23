const {MarkovMachine}=require('./markov')

text=`I am Daniel

I am Sam
Sam I am

That Sam-I-am
That Sam-I-am!
I do not like
That Sam-I-am

Do you like
Green eggs and ham

I do not like them,
Sam-I-am.
I do not like
Green eggs and ham.

Would you like them
Here or there?

I would not like them
Here or there.
I would not like them
Anywhere.
I do not like
Green eggs and ham.
I do not like them,
Sam-I-am

Would you like them
In a house?
Would you like them
With a mouse?

I do not like them
In a house.
I do not like them
With a mouse.
I do not like them
Here or there.
I do not like them
Anywhere.
I do not like green eggs and ham.
I do not like them, Sam-I-am.

Would you eat them
In a box?
Would you eat them
With a fox?

Not in a box.
Not with a fox.
Not in a house.
Not with a mouse.
I would not eat them here or there.
I would not eat them anywhere.
I would not eat green eggs and ham.
I do not like them, Sam-I-am.

Would you? Could you?
In a car?
Eat them! Eat them!
Here they are.

I woould not,
Could not,
In a car

You may like them.
You will see.
You may like them
In a tree?

I would not, could not in a tree.
Not in a car! You let me be.
I do not like them in a box.
I do not like them with a fox
I do not like them in a house
I do mot like them with a mouse
I do not like them here or there.
I do not like them anywhere.
I do not like green eggs and ham.
I do not like them, Sam-I-am.

A train! A train!
A train! A train!
Could you, would you
On a train?

Not on a train! Not in a tree!
Not in a car! Sam! Let me be!
I would not, could not, in a box.
I could not, would not, with a fox.
I will not eat them with a mouse
I will not eat them in a house.
I will not eat them here or there.
I will not eat them anywhere.
I do not like them, Sam-I-am.

Say!
In the dark?
Here in the dark!
Would you, could you, in the dark?

I would not, could not,
In the dark.

Would you, could you,
In the rain?

I would not, could not, in the rain.
Not in the dark. Not on a train,
Not in a car, Not in a tree.
I do not like them, Sam, you see.
Not in a house. Not in a box.
Not with a mouse. Not with a fox.
I will not eat them here or there.
I do not like them anywhere!

You do not like
Green eggs and ham?

I do not
Like them,
Sam-I-am.

Could you, would you,
With a goat?

I would not,
Could not.
With a goat!

Would you, could you,
On a boat?

I could not, would not, on a boat.
I will not, will not, with a goat.
I will not eat them in the rain.
I will not eat them on a train.
Not in the dark! Not in a tree!
Not in a car! You let me be!
I do not like them in a box.
I do not like them with a fox.
I will not eat them in a house.
I do not like them with a mouse.
I do not like them here or there.
I do not like them anywhere!

I do not like
Green egss
And ham!

I do not like them,
Sam-I-am.

You do not like them.
So you say.
Try them! Try them!
And you may.
Try them and you may I say.

Sam!
If you will let me be,
I will try them.
You will see.

Say!
I like green eggs and ham!
I do! I like them, Sam-I-am!
And I would eat them in a boat!
And I would eat them with a goat...
And I will eat them in the rain.
And in the dark. And on a train.
And in a car. And in a tree.
They are so goodm so goodm you see!

So I will eat them in a box.
And I will eat them with a fox.
And I will eat them in a house.
And I will eat them with a mouse.
And I will eat them here and there.
Say! I will eat them anhywhere!

I do so like
Green eggs and ham!
Thank you!
Thank you,
Sam-I-am`




describe("markov machine",function(){

    test('markov machine output data type should be string',function(){
        let mm=new MarkovMachine(text)
        expect(mm.makeText()).toEqual(expect.any(String))
    })


    test('markov machine output text length by default should be less than or equal 100',function(){
        let mm=new MarkovMachine(text)
        expect(mm.makeText().split(' ').length).toBeLessThanOrEqual(100)
    })
    
    test('markov machine output text length  should be less than or equal 20 (given number)',function(){
        let mm=new MarkovMachine(text)
        expect(mm.makeText(20).split(' ').length).toBeLessThanOrEqual(20)
    })

    test('last word of the text if its length less than the default 100 ',function(){
        
        let mm=new MarkovMachine(text)
        let wordList=mm.makeText().split(' ')
        let lastWord=wordList.slice(-1)

        if (wordList.length<100){
            expect(lastWord).toEqual("Sam-I-am")
        }
    })

    test('Output should be empty when the initial text is empty',function(){
        
        let emptyString=''
        let mm=new MarkovMachine(emptyString)
        
        expect(mm.makeText()).toEqual("")
    })

})

