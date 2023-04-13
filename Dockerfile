# Base image
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /backend

# Copy requirements file and install dependencies
COPY backend/requirements.txt .
RUN pip install -r requirements.txt

# Copy project files
COPY backend .

# Expose port 8000
EXPOSE 8000

# Start server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
