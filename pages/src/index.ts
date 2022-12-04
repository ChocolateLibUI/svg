import { circle, ellipse, ellipseArc, isoscelesTriangle, line, rectangleFromCorner, strokeAndWidth, strokeFillWidth, svg } from "../../src";

let svgInst = svg(1000, 1000);
document.body.appendChild(svgInst);

svgInst.appendChild(circle(10, 10, 3));
svgInst.appendChild(ellipse(10, 20, 3, 5));
svgInst.appendChild(strokeAndWidth('black', 2, line(15, 15, 25, 25)));
svgInst.appendChild(rectangleFromCorner(6, 28, 8, 8, 0));
svgInst.appendChild(isoscelesTriangle(30, 10, 8, 8));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(50, 50, 30, 30, 0, 90)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(150, 50, 30, 30, 0, 180)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(250, 50, 30, 30, 0, 270)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(350, 50, 30, 30, 0, 359.9)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(450, 50, 30, 30, 0, 45)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(550, 50, 30, 30, 45, 135)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(650, 50, 30, 30, -180, 0)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(750, 50, 30, 30, -333, -44)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(850, 50, 30, 30, -1000, -800)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(950, 50, 30, 30, 2000, 2030)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(50, 150, 30, 30, 145, 45)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(150, 150, 30, 30, 90, 0)));

svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(50, 550, 30, 60, 0, 90)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(150, 550, 30, 60, 0, 180)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(250, 550, 30, 60, 0, 270)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(350, 550, 30, 60, 0, 359.9)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(450, 550, 30, 60, 0, 45)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(550, 550, 30, 60, 45, 135)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(650, 550, 30, 60, -180, 0)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(750, 550, 30, 60, -333, -44)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(850, 550, 30, 60, -1000, -800)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(950, 550, 30, 60, 2000, 2030)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(50, 650, 30, 60, 145, 45)));
svgInst.appendChild(strokeFillWidth('black', 'none', 2, ellipseArc(150, 650, 30, 60, 90, 0)));