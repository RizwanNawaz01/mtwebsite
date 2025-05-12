<template>
   <div class="flex flex-col justify-center min-h-screen py-12 mt-[-99px]   bg-black sm:px-6 lg:px-8 border-b-2 border-white">
    <div class="sm:mx-auto sm:w-full sm:max-w-md ">
        <h2 class="mt-6 text-3xl font-extrabold text-center text-white">
            Sign in to your account
        </h2> 
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" @submit.prevent="submitFunction">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div class="mt-1">
                        <input v-model="email" id="email" name="email" type="email" autocomplete="email" requiyellow
                            class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your email address">
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div class="mt-1">
                        <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" requiyellow
                            class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your password">
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember_me" name="remember_me" v-model="remember" type="checkbox"
                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                        <label for="remember_me" class="block ml-2 text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>
 
                </div>

                <div>
                    <button type="submit"

                        class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-yellow group hover:bg-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-yellow">

                        Sign in
                    </button>
                </div>
            </form>
            <div class="mt-6">

                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 text-gray-500 bg-gray-100">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-3 mt-6">
                    <div>
                        <a href="#"
                            class="flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                            <img class="w-5 h-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                alt="">
                        </a>
                    </div>
                    <div>
                        <a href="#"
                            class="flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                            <img class="w-5 h-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                alt="">
                        </a>
                    </div>
                    <div>
                        <a href="#"
                            class="flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                            <img class="w-6 h-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>


        const remember = ref('')
        const email = ref('')
        const password = ref('')


async function submitFunction() {
    const response = await  $fetch('/api/user',{
            method:"POST",
            body:{
                email:email.value,
                password:password.value,
            },
    headers: {
        "Content-Type": "application/json" // Ensure JSON content-type
    },
        })
        if(response && response.success){
            navigateTo('/admin/dashboard');
        }else{
                console.log('Error');
        }
    
}
</script>

<style   scoped>

</style>