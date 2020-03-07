<template>
    <div id="userform">
        <span v-if='currentUser'>
            {{currentUser}}
            <button @click='signout'>Sign out</button>
        </span>
        <span v-else>
            email <input v-model='email'>
            password <input type='password' v-model='password'>
            <button v-on:click='signin'>Sign in</button>
            <button v-on:click='signup'>Sign up</button>
            {{userMessage}}
        </span>
    </div>
</template>

<script>

    export default {
            name: 'User',
            props: {
                currentUser: String,
                email: String,
                password: String,
                userMessage: String
            },
            methods: {
                signup: function () {
                    this.userMessage = '';
                    
                    if (!this.email) {
                        this.userMessage = 'error: empty email';
                        return
                    }
                    if (!this.password) {
                        this.userMessage = 'error: empty password';
                        return;
                    }
                    var newUser = {
                        'email': this.email,
                        'password': this.password
                    }
                    
                    localStorage.setItem('users', JSON.stringify(newUser))
                },
                signin: function () {
                    var savedUser = JSON.parse(localStorage.getItem('users'));
                    if (savedUser.email == this.email && savedUser.password == this.password) {
                        this.currentUser = this.email;
                    }
                    else {
                        this.userMessage = ' error: username or password is not correct.';
                        return;
                    }
                },
                signout: function () {
                    this.currentUser = '';
                    this.email = '';
                    this.password = '';
                    this.userMessage = '';
                }
            }
    };    
</script>