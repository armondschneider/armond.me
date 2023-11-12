/**
main author -> ertdfgcvb
*/

import { map } from '/src/modules/num.js'
import { rgb2hex, rgb}  from '/src/modules/color.js'
import Camera from '/src/modules/camera.js'
import Canvas from '/src/modules/canvas.js'

const cam = Camera.init()
const can = new Canvas()

const density = ' .arMondScH3lder'

const pal = []
pal.push(rgb(  0,   0,   0))
pal.push(rgb(102,   45,   0))
pal.push(rgb(255, 56,   0))
pal.push(rgb(  0, 100, 11))
pal.push(rgb(100, 192, 99))

const data = []

export function pre(context, cursor, buffer) {
	const a = context.metrics.aspect

	can.resize(context.cols, context.rows)
	can.cover(cam, a).mirrorX().quantize(pal).writeTo(data)
}

export function main(coord, context, cursor, buffer) {
	const color = data[coord.index]

	const index = Math.floor(color.v * (density.length-1))
	return {
		char       : density[index],
		color      : 'white',
		backgroundColor : rgb2hex(color)
	}
}
