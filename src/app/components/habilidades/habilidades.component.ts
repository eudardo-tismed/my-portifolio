import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface HabilidadesData {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  cloud: Skill[];
  tools: Skill[];
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  databaseSkills: Skill[] = [];
  cloudSkills: Skill[] = [];
  toolsSkills: Skill[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<HabilidadesData>('assets/data/habilidades.json').subscribe((res) => {
      this.frontendSkills = res.frontend || [];
      this.backendSkills = res.backend || [];
      this.databaseSkills = res.database || [];
      this.cloudSkills = res.cloud || [];
      this.toolsSkills = res.tools || [];
      this.animateSkillBars();
    });
  }

  private animateSkillBars(): void {
    // Add staggered animation delays for skill cards
    setTimeout(() => {
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-in');
        }, index * 100);
      });
    }, 500);
  }
}
