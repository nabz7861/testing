<template>
    <div id="search">
        Search <input v-model='term'><br>
        <div v-for='course in results' :key="course.id" class='course'>
            <ul>
                <li v-for='(value, key) in course' :key="value.id">
                    {{key}}: {{value}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import courses from './courses.json'

    export default {
            name: 'Search',
            data() {
              return {
                courses: courses
              }
            },
            props: {
                term: String,                
            },
            computed: {
                results: function () {
                    return courses.filter(course => 
                        course.topic.includes(this.term)
                    )
                },
            }
    };
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap");

.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  font-family: "Gloria Hallelujah", cursive;
}

div,
header,
aside,
main {
  border: solid lightblue;
  box-sizing: border-box;
  /* margin: 1%; */
  padding: 10px;
}

header {
  /* width: 95%; */
  grid-column: 1/3;
  grid-row: 1;
}

#logo {
  width: 100px;
}

#searchbox {
  width: 300px;
}

#logo,
#searchbox {
  height: 50px;
  display: inline-block;
}

/* button {
  height: 50px;
  margin: 20px;
  padding: 10px;
} */

aside {
  /* width: 20%; */
  /* float: left; */
  grid-column: 1;
  grid-row: 2;
}

main {
  /* width: 70%; */
  /* margin-left: 25%; */
  grid-column: 2;
  grid-row: 2;
}

.filter {
  /* width: 80%; */
  min-height: 130px;
  margin-bottom: 5%;
}

.product {
  width: 200px;
  height: 200px;
  display: inline-block;
  margin-right: 3%;
  margin-bottom: 3%;
}

.course {
  width: 200px;
  display: inline-block;
  margin-right: 3%;
  margin-top: 3%;
  padding: 0px;
}

</style>
