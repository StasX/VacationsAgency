# Install Debian OS + python 3 so requirements.txt could be install without errors (system bug / missing dependencies):
    FROM python:3

    WORKDIR /app
    RUN python -m venv env
    COPY requirements.txt /app
    RUN /app/env/bin/pip install -r requirements.txt
    COPY . /app
    ENTRYPOINT /app/env/bin/python src/manage.py runserver 0.0.0.0:8000
    