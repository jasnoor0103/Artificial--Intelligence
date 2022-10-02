function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } 

      else  if (input == "Hello") {
        return "Hello there!";
    } 
    else if (input=== "hi"){
      return "hi , How are you ?"
    }

    else if (input=== "hi,how are you"){
        return "Fine, thankyou "
      }

      else if (input=== "Hi"){
      return "hi , How are you ?"
    }
      else if (input=="who developed AI?"){
        return "John McCarthy, a professor emeritus of computer science at Stanford, the man who coined the term artificial intelligence and subsequently went on to define the field for more than five decades, died suddenly at his home in Stanford in the early morning Monday, Oct. 24.";
      }
    else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input=="please crack a joke"){
      return "British: Can u swim?                                   Indian:No. British:  Then a dog is better than u because it can swim. Indian: Can u swim? British: Yes!             Indian: Then what's the difference between u & the dog?  British shocked, faints!! Indian Rocks!            European : Why do all you Indians come in different colors?  Look at us, we are all white.         Indian: Horses too come in different colors but donkeys are all the same!!!";
    }
      else if (input=="go to hell"){
        return "mind your language please ";
      }
        else if (input == "what is AI?") {
          return "Artificial intelligence refers to the simulation of human intelligence in a machine that is programmed to think like humans. The idea of artificial intelligence initially begins by the computer scientist from 1943 to 1956. A model proposed by Alan Turing which is known as the Turing test. A Turing test is an algorithm that computes the data similar to human nature and behavior for proper response. Since this Turing test proposed by Alan Turing which plays one of the most important roles in the development of artificial intelligence, So Alan Turing is known as the father of artificial intelligence. This test is based on the principle of human intelligence defined by a machine and execute the task simpler than the human. The goal of artificial intelligence includes learning, reasoning, and Perception. As technology advances the machine that calculates basic operation recognized by a specific type of system which requires a machine to optimize through embodied artificial intelligence. So we can say that artificial intelligence is beneficial for different industries where machines are wired for performing complex tasks with the help of artificial intelligence. The artificial intelligence approaches also in mathematics, computer science, linguistics, psychology, space science and so more.";
        }
          
    
    else {
        return "Will surely work upon it!";
    }
    
}