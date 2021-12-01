import express from "express";
import next from "next";
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const port = parseInt(process.env.SERVER_PORT!,10) || 3000;
    const server = express();
    server.get("/video/:id",(req,res) => {
        const actualPage = "/video/[...pid]";
        const queryParams = {title:req.params.id};
        app.render(req,res,actualPage,queryParams);
    })
    server.get("/category/:id",(req,res) => {
        const actualPage = "/category/[...pid]";
        const queryParams = {title:req.params.id};
        app.render(req,res,actualPage,queryParams);
    })
    server.get("/channel/:id",(req,res) => {
        const actualPage = "/channel/[...pid]";
        const queryParams = {title:req.params.id};
        app.render(req,res,actualPage,queryParams);
    })
    server.get("/tags/:id",(req,res) => {
        const actualPage = "/tags/[...pid]";
        const queryParams = {title:req.params.id};
        app.render(req,res,actualPage,queryParams);
    })
    server.all("*",(req,res) => {
        return handle(req,res);
    })
    server.listen(port,() => {
        console.log(`Listening on http://localhost:${port}`);
    })
})