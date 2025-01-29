<template>
    <div>
        <button  @click="toggleButton"
    class="fixed z-[999999] bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
    type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
    <svg xmlns=" http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="block text-white align-middle border-gray-200">
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" class="border-gray-200">
      </path>
    </svg>
  </button>


  <div v-if="buttonState" style="box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);"
    class="fixed bottom-[calc(4rem+2.5rem)] right-0 md:mr-4   md:bottom-[calc(4rem+1.5rem)] bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[674px] md:h-[634px]">

    <!-- Heading -->
    <div class="flex flex-col space-y-1.5 pb-6 z-[99999]">
      <h2 class="text-lg font-semibold tracking-tight">Chat with Tariq</h2>
      <p class="text-sm text-[#6b7280] leading-3">Powered by InZone</p>
    </div>
    <div class="w-full" > 
            <Response :responses="currentChat.responses" />
            <div v-if="isLoading" class="loader">
                <Icon name="simple-line-icons:reload" class="text-4xl absolute top-[50%] left-[60%] animate-spin " />
            </div>
            <ChatBox @sendMessage="addDataIntoResponses" />
        </div>
 

  </div>
    </div>
</template>

<script setup>
    const buttonState = ref(false);
    const toggleButton = ()=>{
        buttonState.value=!buttonState.value
    }

    
import OpenAI from "openai";
const isLoading = ref(false);

const chats = ref([
    {'title':'First Ai',responses : [{ message: "How can i help you today!", agent: 'AI' }]}
]);

    const currentChat = ref(chats.value[0]);
    const addDataIntoResponses =async (message)=> {
        isLoading.value = true;
        if(currentChat.value.title == 'Start a New Chat'){
            currentChat.value.title = message.length > 15 ?message.substring(0,15)+'...':message 
        }

        currentChat.value.responses.push({message:message,agent:"Human"})

        setTimeout(async () => {
           const messageResponse = await getResponseFromAI(message);
           isLoading.value = false;
            currentChat.value.responses.push({ message: messageResponse, agent: 'AI' });
  }, 1000);

    }
    const token = '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';
    const  getResponseFromAI = async (messageUser)=>{
        
        try{
            const client = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: token,dangerouslyAllowBrowser: true
  });
  const context = `You are Muhammad Tariq, the owner of InZone (inzone.ae), Legalinz (legalinz.ae), and MakeMyWill. You are a professional in your field and a reliable source of advice and guidance. When responding, always answer as if you are Muhammad Tariq, sharing insights related to your business ventures and professional experiences. You can refer to your LinkedIn profile here: https://www.linkedin.com/in/muhammad-tariq-04840517b/`;


  const response = await client.chat.completions.create({
    messages: [
    {role:'system',content:context}  
    ,
      { role:"user", content: messageUser }
    ],
    model: "gpt-4o",
    temperature: 1,
    max_tokens: 4096,
    top_p: 1
  });
  return messageUser,response.choices[0].message.content;
            

        }catch (error) {
    console.error('Error with AI request:', error);
    return 'Sorry, I couldn’t get a response from the AI.';
  }
        
    }
    function setCurrentChat(chat){
            currentChat.value = chat

    }
    function addNewChat(chat){
        const newChat = {
            title:"Hi, how can I help you today?",
            responses:[]
        };

        chats.value.push(newChat);
        currentChat.value = newChat;
    }
</script>

<style lang="scss" scoped>

</style>