import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Perfil {
  nome: string;
  whatsapp: string;
  email: string;
}

interface Objetivo {
  titulo: string;
  descricao: string;
}

interface EducacaoItem {
  instituicao: string;
  curso: string;
  local: string;
  periodo: string;
}

interface ExperienciaItem {
  instituicao: string;
  link?: string;
  cargo: string;
  local: string;
  periodo: string;
  descricao: string;
}

interface CurriculoData {
  perfil: Perfil;
  objetivo: Objetivo;
  educacao: EducacaoItem[];
  experiencias: ExperienciaItem[];
}

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss'],
})
export class CurriculoComponent implements OnInit {
  data: CurriculoData | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<CurriculoData>('assets/data/curriculo.json')
      .subscribe((res) => (this.data = res));
  }

  printCurriculo(div: string): void {
    let divCurriculo = document.getElementById(div)?.innerHTML;

    let a = window.open('', '', 'height=500, width=500');
    a?.document.write('<html>');
    const nome = this.data?.perfil.nome || '';
    const whatsapp = this.data?.perfil.whatsapp || '';
    const email = this.data?.perfil.email || '';
    a?.document.write(
      '<body> <h2>' +
        nome +
        '</h2><h4>WhatsApp: ' +
        whatsapp +
        '</h4> <h4>Email: ' +
        email +
        '</h4>' +
        divCurriculo
    );
    a?.document.write(divCurriculo !== undefined ? toString() : '');
    a?.document.write('</body></html>');
    a?.print();
    a?.document.close();
  }
}
