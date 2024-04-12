# Python runtime 
FROM python:3.9-slim

# Set the working directory
WORKDIR /server

# Install Chrome 
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
    && apt-get update && apt-get install -y \
    google-chrome-stable \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy the requirements.txt file
COPY server/requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the server directory contents
COPY server/ .

# Expose port 5000 to the outside world
EXPOSE 5000

# Run the Flask app
CMD ["flask", "run", "--host=0.0.0.0"]
