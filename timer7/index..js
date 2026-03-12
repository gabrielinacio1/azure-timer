module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    context.log('Funcao timer7 via GitHub executada! Tempo atual: ', timeStamp);
};
