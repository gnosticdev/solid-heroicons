import { serve } from 'bun'

await serve({
	fetch(request, server) {
		return new Response(request.url)
	},
	port: 3000,
})
