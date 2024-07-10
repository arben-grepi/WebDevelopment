if (true == true)
    console.log('hello world')
else if (true == true)
    console.log('hello world')


//if we have multiple statements, we need to put in a block of code
if (true == true) {
    console.log('hello world')
    console.log('hello world')

}
    

//SWITCH

let role = 'guest';

switch (role){
    case 'guest':
        console.log('Guest User')
        break;
    case 'moderator':
        console.log('moderator')
        break;
    default:
        console.log('Unknown User')
}