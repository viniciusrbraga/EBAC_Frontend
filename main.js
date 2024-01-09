"use strict";

var alunos = ['ABNER', 'BARBARA', 'CAIO', 'DAGOBERTO', 'EBERT', 'FABIANA', 'GABRIEL', 'HADASSA', 'IAGO', 'JACKSON', 'KAEDA', 'LAILA', 'MOACIR', 'NADIA', 'ODAIR', 'PEDRO', 'QUEREN', 'RACHEL', 'SABRINA', 'TIAGO', 'ULISSES', 'VALDECIR', 'WAGNER', 'XANDER', 'YGOR', 'ZION'];
var arrayDeAlunos = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: Math.floor(Math.random() * 11)
  };
});
for (var i = 0; i < arrayDeAlunos.length; i++) {
  console.log("O aluno ".concat(arrayDeAlunos[i].nome, "  obteve a nota ").concat(arrayDeAlunos[i].nota, "."));
}
function filtraAlunos(arrayDeAlunos) {
  try {
    return arrayDeAlunos.nota >= 6;
  } catch (e) {
    return 'Erro ao listar alunos aprovados';
  }
}
var alunosAprovados = arrayDeAlunos.filter(filtraAlunos);
if (alunosAprovados.length == 0) {
  console.log('Nenhum aluno foi aprovado');
} else {
  for (var _i = 0; _i < alunosAprovados.length; _i++) {
    console.log("O aluno ".concat(alunosAprovados[_i].nome, " foi aprovado com a nota ").concat(alunosAprovados[_i].nota, "."));
  }
}