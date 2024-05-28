    const data = new Date();
    const diaSemana = data.getDay();
    let dia;

    //usando ternário
    /* function dia (diaSemana) {
        return diaSemana === 0 ? 'Domingo' :
            diaSemana === 1 ? 'Segunda-Feira' :
            diaSemana === 2 ? 'Terça-Feira' :
            diaSemana === 3 ? 'Quarta-Feira' :
            diaSemana === 4 ? 'Quinta-Feira' :
            diaSemana === 5 ? 'Sexta-Feira' :
            diaSemana === 6 ? 'Sábado' :
            'Erro';
    }

    console.log(`${diaSemana}, ${dia(diaSemana)}`); */


    //usando switch
    switch (diaSemana) {
        case 0:
            dia = 'Domingo';
            break;
        case 1:
            dia = 'Segunda';
            break;
        case 2:
            dia = 'Terça';
            break;
        case 3:
            dia = 'Quarta';
            break;
        case 4:
            dia = 'Quinta';
            break;
        case 5:
            dia = 'Sexta';
            break;
        case 6:
            dia = 'Sábado';
            break;
        default:
            dia = 'erro';
    }


console.log(`${diaSemana}, ${dia}`);