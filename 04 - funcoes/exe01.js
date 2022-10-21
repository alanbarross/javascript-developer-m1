function my_nameIs(nome) {
    return 'my name is ' + nome;
}

function is_deMaior(anos) {
    if (anos >= 18) {
        return 'maior de Idade';
    } else {
        return 'menor de Idade';
    }
}

(function () {
    console.log(my_nameIs('alan') + ' e sou ' + is_deMaior(33))
})();
