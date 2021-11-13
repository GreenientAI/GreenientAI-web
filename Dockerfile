# syntax=docker/dockerfile:1

FROM python:alpine

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

ENV FLASK_APP=server

ENV FLASK_ENV=development

CMD ["flask", "run", "--host=0.0.0.0"]