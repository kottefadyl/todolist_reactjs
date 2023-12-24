
module.exports = {
    chercher1 (id) {
        let data = JSON.parse(localStorage.getItem('object')) || []
        for (let i = 0; i < data.length; i++) {
            if (data[i].activId === id) {
                return i
            }
        }
    },

    todoprogress(i){
        let data = JSON.parse(localStorage.getItem('object')) || []
        data[i].status = 'pogress'
        localStorage.setItem('object', JSON.stringify(data));
    },

    deleteTodo(i){
        let data = JSON.parse(localStorage.getItem('object')) || []
        data.splice(i,1)
        localStorage.setItem('object', JSON.stringify(data));
    },

    todoDone(i){
        let data = JSON.parse(localStorage.getItem('object')) || []
        data[i].status = "done"
        localStorage.setItem('object', JSON.stringify(data));
        console.log('données', data);
    }
}