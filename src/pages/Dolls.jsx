import React from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


function dolls() {
  return (
    <div className="section">
        <h2>
            Las Rozen Maiden 
        </h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={require('../images/shinku.png')} />
        <Card.Body>
          <Card.Title>Shinku</Card.Title>
          <Card.Text>
            <li class="list-group-item">Quinta Rozen Maiden</li> 
            <li class="list-group-item">Arma: Baston de color rosado</li>
            <li class="list-group-item">Kanji: 真紅</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../images/hinaichigo.png')} />
        <Card.Body>
          <Card.Title>Hinaichigo</Card.Title>
          <Card.Text>
          <li class="list-group-item">Sexta Rozen Maiden</li> 
            <li class="list-group-item">Arma: Enredadera de fresas rosadas</li>
            <li class="list-group-item">Kanji: 雛苺</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../images/suise.png')} />
        <Card.Body>
          <Card.Title>Suiseiseki</Card.Title>
          <Card.Text>
            <li class="list-group-item">Tercera Rozen Maiden</li> 
            <li class="list-group-item">Arma: Regadera</li> 
            <li class="list-group-item">Kanji: 翠星石</li>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={require('../images/souse.png')} />
        <Card.Body>
          <Card.Title>Souseiseki</Card.Title>
          <Card.Text>
          <li class="list-group-item">Cuarta Rozen Maiden</li> 
          <li class="list-group-item">Arma: Tijeras </li>
          <li class="list-group-item">Kanji: 蒼星石</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../images/kana.png')} />
        <Card.Body>
          <Card.Title>Kanaria</Card.Title>
          <Card.Text>
            <li class="list-group-item">Segunda Rozen Maiden</li> 
            <li class="list-group-item">Arma: Violin</li> 
            <li class="list-group-item">Kanji: 金糸雀</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../images/sugin.png')} />
        <Card.Body>
          <Card.Title>Sugintou</Card.Title>
          <Card.Text>
          <li class="list-group-item">Primera Rozen Maiden</li> 
          <li class="list-group-item">Armas: Espadas y plumas negras</li> 
          <li class="list-group-item">Kanji: 水銀燈</li>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
     <CardGroup>
      <Card>
        <Card.Img variant="top" src={require('../images/bara.png')} />
        <Card.Body>
          <Card.Title>Barasuishou</Card.Title>
          <Card.Text>
          <li class="list-group-item">Falsa Rozen Maiden (No tiene alma)</li>
          <li class="list-group-item">Arma: Espada de cristal</li>
          <li class="list-group-item">Kanji: 薔薇水晶</li>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  )
} 

export default dolls






