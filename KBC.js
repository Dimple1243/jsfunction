function ask_question(){
    question=["How many continents are there",
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"]
    return question
}
question_list=ask_question()
function give_option(){
    
    option=[["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]]
    return option
}
option_list=give_option()
function solution(){
   solution= ([3, 4, 1])
   return solution
}
solution_list=solution()
function answer(){
    answer=["3 seven", "4 eight","4 delhi","1 Chandigarh","1 Software Engineering","2 Counseling"]
    return answer
}
answer_list=answer()
a=0
b=1
count=0
for (i=0;i<question_list.length;i++){
    console.log(question_list[i])
    for(j=0;j<=option_list.length;j++){
        l=(option_list)[i][j]
        console.log(j+1,l)
    }
    console.log("YOU HAVE 50-50 LIFE LINE ")
    life=require("readline-sync");
    life_line=life.question("IF YOU WANT LIFE LINE ...FOR:- YES ,PRESS'Y' AND FOR:- NO ,PRESS 'N'")
    if (life_line=="Y"){
        if (count==0){
            console.log(answer_list[i+a])
            console.log(answer_list[i+b])
            ans=require("readline-sync")
            answer=require.ans("ENTER YOUR ANSWER ")
            if (solution_list[i]==answer){
                console.log("CORRECT ANSWER..")
        
                count+=1
            }
            else{
                console.log("YOUR ANSWER IS WRONG ")
                count=count+1
            }
        }
        else{
            console.log("YOUR LIFELINE HAS BENN FINISHED..ENTER YOUR ANSWER BY YOURS")
            a=require("readline-sync")
            m=a.question("enter answer")
            if (solution_list[i]==m){
                console.log("right ")
            }
            else{
                console.log("YOUR ANSWER IS WRONG")
                 break 
            }
        }
    }
    else if (life_line=="N"){
        use=require("readline-sync")
        user=use.question(" CHOOSE BY YOURSELF ")
        if (solution_list[i]==user){
            console.log("YOUR ANSWER IS CORRECT,")
            console.log("CONGRATS DEAR YOU WON THE KBC....")
        }
        else{
            console.log("WRONG ANSWER ....")
            console.log("OH YOU LOOSE THE GAME TRY AGAIN DEAR.......")
            break
        }
    }
    else{
        console.log("THANKS FOR PLAYING THIS GAME HAVE A GREAT DAY")
    
        break
    }
    a+=1
    b+=1     
}
