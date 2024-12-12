#glosario #jitter #video 

el sistema de coordenadas utilizado por jitter en maxmsp donde el centro de la ventana es (0,0) el borde izquierdo es -1 y el derecho es 1, el borde inferior es -1 y el superior 1.


Para ajustar las coordenadas de píxeles a este sistema, podemos convertir las posiciones de (posX, posY) en píxeles a la escala NDC. La fórmula es:

• **Para X**: $(\text{posX} / \text{ancho}) \times 2 - 1$

• **Para Y**: $-((\text{posY} / \text{alto}) \times 2 - 1)$


